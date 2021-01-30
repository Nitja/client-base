import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
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
  clientAddForm: FormGroup;
  url: any;

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
        this.initFormWithData(this.client);
      } else {
        this.initForm();
      }
    });
  }

  initForm() {
    this.clientAddForm = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      phone: new FormControl(),
      address: new FormControl(),
      dateOfBirth: new FormControl(),
      type: new FormControl(),
      photo: new FormControl(),
       // photoUrl: new FormControl(),
      info: new FormControl(),
    });
  }

  initFormWithData(client) {
    this.clientAddForm = new FormGroup({
      name: new FormControl(client.name),
      surname: new FormControl(client.surname),
      phone: new FormControl(client.phone),
      address: new FormControl(client.address),
      dateOfBirth: new FormControl(client.dateOfBirth),
      type: new FormControl(client.type),
      photo: new FormControl(client.photo),
      // photoUrl: new FormControl(client.photoUrl),
      info: new FormControl(client.info),
    });
    this.url = client.photoUrl;
    }

  onSubmit(form) {
    this.dataService.addClient(form, this.clientID);

    form.reset();
    this.router.navigateByUrl("/clients");
  }

  onSelectFile(event) {
    // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
        this.clientAddForm.controls['photo'].setValue(this.url); // <-- Set Value for Validation
        // this.clientAddForm.controls['photoUrl'].setValue(this.url); // <-- Set Value for Validation   
      };
    } else {
      this.clientAddForm.controls['photo'].setValue(this.client["photo"]); // <-- Set Value for Validation
      // this.clientAddForm.controls['photoUrl'].setValue(this.client["photoUrl"]); // <-- Set Value for Validation
    }
  }
}