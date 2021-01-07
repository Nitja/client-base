import { Component } from "@angular/core";
import { DataService } from "../services/data.service";
import { FilterService } from "../services/filter.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.page.html",
  styleUrls: ["./clients.page.scss"],
})
export class ClientsPage {
  clients = [];
  clientsShown = [];
  showRemoveButton = true;
  public searchTerm: string = "";

  constructor(private filterService: FilterService, private dataService: DataService) {}

  ionViewDidEnter() {
    this.clients = this.dataService.getClients();
    this.clientsShown = this.clients.sort((a, b) => a.name > b.name ? 1 : -1);
    this.setFilteredItems();
  }

  onRemoveClient() {

  }

  setFilteredItems() {
    //this.clientsShown = this.dataService.filterItemsByNameAndSurname(this.clients, this.searchTerm);
    this.clientsShown = this.filterService.filterItemsByParameters(this.clients, this.searchTerm, ["name", "surname"]);
    
  }
}
