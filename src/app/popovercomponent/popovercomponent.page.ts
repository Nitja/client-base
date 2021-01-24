import { Component } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-popovercomponent",
  templateUrl: "./popovercomponent.page.html",
  styleUrls: ["./popovercomponent.page.scss"],
})
export class PopovercomponentPage {
  constructor(private popover: PopoverController) {}

  onEditClick() {
    this.popover.dismiss("edit");
  }

  onRemoveClick() {
    this.popover.dismiss("remove");
  }
}
