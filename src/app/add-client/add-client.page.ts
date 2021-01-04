import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.page.html",
  styleUrls: ["./add-client.page.scss"],
})
export class AddClientPage implements OnInit {
  masks: any;
  phoneNumber: any = "";
  orderCode: any = "";

  constructor() {
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
      orderCode: [/[a-zA-z]/, ":", /\d/, /\d/, /\d/, /\d/],
    };
  }

  ngOnInit() {}

  //only for textMask, if it is not used - delete method
  save() {
    let unmaskedData = {
      phoneNumber: this.phoneNumber.replace(/\D+/g, ""),
      orderCode: this.orderCode.replace(/[^a-zA-Z0-9 -]/g, ""),
    };

    console.log(unmaskedData);
  }

  onSubmit(form) {
    //check for the image and set the standart one if missing
    let clients = JSON.parse(localStorage.getItem("clientBaseClients")) || [];
    clients.push(form.value);
    localStorage.setItem("clientBaseClients", JSON.stringify(clients));

    console.log(form.value);
    form.reset();
  }
}
