import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PopoverController } from "@ionic/angular";
import { PopovercomponentPage } from "../popovercomponent/popovercomponent.page";
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
  timeoutHandler;
  counter = 0;

  constructor(
    private filterService: FilterService,
    private dataService: DataService,
    public popoverController: PopoverController,
    public router: Router
  ) {}

  ionViewDidEnter() {
    this.clientsShown = this.dataService.getClientsSortedByName();
    console.log(this.clientsShown);
  }

  setFilteredItems() {
    //this.clientsShown = this.dataService.filterItemsByNameAndSurname(this.clients, this.searchTerm);
    this.clientsShown = this.filterService.filterItemsByParameters(
      this.dataService.getClients(),
      this.searchTerm,
      ["name", "surname"]
    );
  }

  pressEvent(event, when: string, id: number) {
    if (when == "start") {
      this.timeoutHandler = setInterval(() => {
        this.counter++;
        if (this.counter > 5) {
          clearInterval(this.timeoutHandler);
          this.CreatePopover(event, id);
        }
      }, 100);
    } else if (when == "end") {
      clearInterval(this.timeoutHandler);
      this.counter = 0;
    }
  }

  async CreatePopover(event, id: number) {
    const popover = await this.popoverController.create({
      component: PopovercomponentPage,
      cssClass: "popoverClass",
      event: event,
      showBackdrop: false,
    });

    popover.onDidDismiss().then((res) => {
      if (res.data == "remove") {
        this.dataService.removeClient(id);
        this.ionViewDidEnter();
      } else if (res.data == "edit") {
        this.router.navigate(["add-client", id]);
      }
    });

    return await popover.present();
  }
}
