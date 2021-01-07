import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.page.html",
  styleUrls: ["./add-client.page.scss"],
})
export class AddClientPage implements OnInit {
  url: any;

  constructor(private route: Router, private dataService: DataService) {}

  ngOnInit() {}

  onSubmit(form) {
    this.dataService.addClient(form);

    form.reset();
    this.route.navigateByUrl("/clients");
  }

  onSelectFile(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }
}
