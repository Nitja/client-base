import { Component } from "@angular/core";
import { DataService } from "../services/data.service";
import { FilterService } from "../services/filter.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.page.html",
  styleUrls: ["./clients.page.scss"],
})
export class ClientsPage {
  clientsShown = [];
  public searchTerm: string = "";

  constructor(private filterService: FilterService, private dataService: DataService) {}

  ionViewDidEnter() {
    this.clientsShown = this.dataService.getClientsSortedByName();
  }

  onRemoveClient() {

  }

  setFilteredItems() {
    //this.clientsShown = this.dataService.filterItemsByNameAndSurname(this.clients, this.searchTerm);
    this.clientsShown = this.filterService.filterItemsByParameters(this.dataService.getClients(), this.searchTerm, ["name", "surname"]);
    
  }
}
