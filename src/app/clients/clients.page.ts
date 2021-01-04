import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.page.html",
  styleUrls: ["./clients.page.scss"],
})
export class ClientsPage {
  clients;
  showRemoveButton = true;

  constructor() {}

  ionViewDidEnter() {
    this.clients = JSON.parse(localStorage.getItem("clientBaseClients")) || [];
  }

  onRemoveClient() {

  }
}
