import { Component, Input, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";
import { NavParams } from "@ionic/angular";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-popovercomponent",
  templateUrl: "./popovercomponent.page.html",
  styleUrls: ["./popovercomponent.page.scss"],
})
export class PopovercomponentPage implements OnInit {
   @Input() page: string;

  constructor(
    private popover: PopoverController,
    public navParams: NavParams,
    private dataService: DataService
  ) {
   // console.log(navParams.get("page") + navParams.get("id"));
   this.page = navParams.get("page");
  }

  ngOnInit() {}

  onEditClick(data: any) {}

  onRemoveClick(data: any) {

    // if (this.navParams.get("page") == "clients")
    //   this.dataService.removeClient(this.navParams.get("id"));

    this.popover.dismiss("remove");
  }
}
