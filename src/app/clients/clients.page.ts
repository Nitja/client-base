import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";
//import { PopoverComponent } from '../../component/popover/popover.component';
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
    public popoverController: PopoverController
  ) {}

  ionViewDidEnter() {
    this.clientsShown = this.dataService.getClientsSortedByName();
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
    // this.popoverController
    //   .create({
    //     event,
    //     component: PopovercomponentPage,
    //     cssClass: "popoverClass",
    //     showBackdrop: false,
    //     componentProps: {
    //       'page': 'clients',
    //       'id': id
    //     }
    //   })
    //   .then((popoverElement) => {
    //     popoverElement.present();
    //   });

      const popover = await this.popoverController.create({
        component: PopovercomponentPage,
        cssClass: "popoverClass",
        event: event,
        showBackdrop: false
      });

      popover.onDidDismiss().then((res) => {
        console.log('Results: ', res.data);
      });
        
      return await popover.present();
  }
}
