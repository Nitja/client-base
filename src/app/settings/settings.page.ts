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
  currentLanguage: string; //delete this modifier if all works well

  constructor(
    private translate: TranslateService,
    private dataService: DataService,
    public alertController: AlertController
  ) {
    this.currentLanguage = dataService.getLanguage();
    translate.setDefaultLang(this.currentLanguage);
  }

  ngOnInit() {}

  async changeLanguage() {
    //change in alert
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Radio",
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
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (alertData) => {
            console.log("alertdata: " + alertData);
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
  }

  importData() {}
}
