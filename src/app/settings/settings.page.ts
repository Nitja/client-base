import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { TranslateService } from "@ngx-translate/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  currentLanguage: string;

  constructor(
    private translate: TranslateService,
    private dataService: DataService,
    public alertController: AlertController
  ) {
    this.currentLanguage = dataService.getLanguage();
    translate.setDefaultLang(this.currentLanguage);
  }

  ngOnInit() {}

  // here are list of languages, where can be added a new language
  async changeLanguage() {
    const alert = await this.alertController.create({
      cssClass: "changeLanguageAlert",
      header: this.translate.instant("settings.language"),
      inputs: [
        {
          name: "en",
          type: "radio",
          label: this.translate.instant("settings.en"),
          value: "en",
          checked: this.currentLanguage == "en",
        },
        {
          name: "ee",
          type: "radio",
          label: this.translate.instant("settings.ee"),
          value: "ee",
          checked: this.currentLanguage == "ee",
        },
        {
          name: "ru",
          type: "radio",
          label: this.translate.instant("settings.ru"),
          value: "ru",
          checked: this.currentLanguage == "ru",
        },
      ],
      buttons: [
        {
          text: this.translate.instant("cancel"),
          role: "cancel",
          cssClass: "buttons",
          handler: () => {},
        },
        {
          text: this.translate.instant("submit"),
          handler: (alertData) => {
            this.currentLanguage = alertData;
            this.translate.use(this.currentLanguage);
            this.dataService.setLanguage(this.currentLanguage, true);
          },
        },
      ],
    });
    await alert.present();
  }

  exportData() {
    // let reader = new FileReader();
    // let filesrc;
    // reader.onload = function (loaded) {
    // filesrc = loaded.target.result;
    // context.fileTransfer.download(filesrc, context.file.externalRootDirectory + file.name 12).then(success => {
    // console.log(“File Copied” + context.file.externalRootDirectory);
    // context.file = context.file.externalRootDirectory + file.name 12;
    // }, error => {
    // console.log(error);
    // });
    // };
   // window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

  }

  
  
  writeFile(fileEntry) {
    // let dataObj = "Our stored data here";
    // // Create a FileWriter object for our FileEntry (log.txt). 
    // fileEntry.createWriter(function (fileWriter) {

    //     fileWriter.onwriteend = function() {
    //         console.log("Successful file write...");
    //         readFile(fileEntry);
    //     };

    //     fileWriter.onerror = function (e) {
    //         console.log("Failed file write: " + e.toString());
    //     };

    //     // If data object is not passed in, 
    //     // create a new Blob instead. 
    //     if (!dataObj) {
    //         dataObj = new Blob(['some file data'], { type: 'text/plain' });
    //     }

    //     fileWriter.write(dataObj);
    // });
}

  readFile(fileList: FileList): void {
    let file = fileList[0];
    let fileContent: string | ArrayBuffer;
    let fileReader = new FileReader();

     fileReader.readAsText(file);
    // file holds all info about a file itself
    console.log("file: ");
    console.log(file);

    fileReader.onloadend = function (x) {
      // you can perform an action with readed data from file here
      // here i can get stored data from file and import/write it into the storage
      fileContent = fileReader.result;
      console.log("fileContent: ");
      console.log(fileContent);
    };
  }

}
