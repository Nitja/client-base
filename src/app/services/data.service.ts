import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public clients = [];
  public clientsShown = [];
  public products = [];
  public sales = [];

  constructor(private storage: Storage) {}

  addClient(form, clientID) {
    //client have already gotten when app launched in fetchClients()
    let client = form.value;

    if (client.photo) {
      let photo = document.getElementById("photo");
      client.photo = this.getBase64Image(photo);
    }
    if (clientID) {
      this.removeClient(clientID);
    }
    this.clients.push(client);
    this.storage.set("clientBaseClients", this.clients);
  }

  removeClient(id) {
    console.log("remove client from id = " + id);
    this.clientsShown = this.getClientsSortedByName();
    this.clientsShown.splice(id, 1);
    this.clients = this.clientsShown;
    this.storage.set("clientBaseClients", this.clients);
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  getClientsSortedByName() {
    return this.getClients().sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  getClients() {
    return this.clients.slice(); //makes a copy of clients
  }

  fetchClients() {
    this.storage.get("clientBaseClients").then((val) => {
      this.clients = val || [];
      // console.log(this.clients);
      // console.log("client[0] " + this.clients[0]);
      // console.log ("muudatused");
    });
  }
}
