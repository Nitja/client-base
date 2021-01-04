import { Component } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.page.html",
  styleUrls: ["./clients.page.scss"],
})
export class ClientsPage {
  public clients;
  clientsShown;
  showRemoveButton = true;
  public searchTerm: string = "";

  constructor(private dataService: DataService) {}

  ionViewDidEnter() {
    this.clients = JSON.parse(localStorage.getItem("clientBaseClients")) || [];
    this.clientsShown = this.clients;
    console.log(this.clients);
    this.setFilteredItems();
    console.log(this.clients);
  }

  onRemoveClient() {

  }

  setFilteredItems() {
    this.clientsShown = this.dataService.filterItemsByName(this.clients, this.searchTerm);
  }
}
