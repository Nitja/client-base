import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.page.html",
  styleUrls: ["./add-client.page.scss"],
})
export class AddClientPage implements OnInit {
  client = []; //current client to edit
  clientID;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    let clientsShown = this.dataService.getClientsSortedByName();
    this.activatedRoute.params.subscribe((param) => {
      if (param.id) {
        this.clientID = param.id;
        this.client = clientsShown[this.clientID];
        console.log("param.id = " + param.id);
        console.log(this.client);
        console.log(this.clientID);
      }
    });
  }

  onSubmit(form) {
    this.dataService.addClient(form, this.clientID);

    form.reset();
    this.router.navigateByUrl("/clients");
  }

  onSelectFile(event) {
    // called each time file input changes
    let url: any;
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        url = event.target.result;
      };
    }
  }
}
