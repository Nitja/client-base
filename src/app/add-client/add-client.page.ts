import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.page.html",
  styleUrls: ["./add-client.page.scss"],
})
export class AddClientPage implements OnInit {
  clients;
  masks: any;
  phoneNumber: any = "";
  url: any;

  constructor(private route: Router) {
    this.masks = {
      phoneNumber: [
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ],
    };
  }

  ngOnInit() {}

  //only for textMask, if it is not used - delete method
  save() {
    let unmaskedData = {
      phoneNumber: this.phoneNumber.replace(/\D+/g, ""),
    };

    console.log(unmaskedData);
  }

  onSubmit(form) {
    this.clients = JSON.parse(localStorage.getItem("clientBaseClients")) || [];

    let client = form.value;
    if(client.photo){
      let photo = document.getElementById("photo");
      client.photo = this.getBase64Image(photo);
    }
    
    this.clients.push(client);
    localStorage.setItem("clientBaseClients", JSON.stringify(this.clients));

    form.reset();
    this.route.navigateByUrl('/clients');
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
}
