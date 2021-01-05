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
    this.clientsShown = this.clients.sort((a, b) => a.name > b.name ? 1 : -1);
    console.log(this.clientsShown);
    this.setFilteredItems();
    console.log(this.clientsShown);
  }

  onRemoveClient() {

  }

  setFilteredItems() {
    //this.clientsShown = this.dataService.filterItemsByNameAndSurname(this.clients, this.searchTerm);
    this.clientsShown = this.dataService.filterItemsByParameters(this.clients, this.searchTerm, ["name", "surname"]);
    
  }
}
