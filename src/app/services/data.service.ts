import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public clients = []; //all clients from db
  public clientsShown = []; //clients like they are shown (f.e. sorted)
  public products = []; //all products from db
  public sales = []; //all sales from db
  public language: string; //current language of the app stored in db

  private languageSource = new BehaviorSubject("Initial language");
  languageChanged = this.languageSource.asObservable();

  constructor(private storage: Storage) {}

  addClient(form, clientID: number) {
    //client have already gotten when app launched in fetchClients()
    let client = form.value;

    if (client.photo) {
      let photo = document.getElementById("photo");
      client.photo = this.getBase64Image(photo);
    }
    //if clientID != null it means, that it is not new client, but edited existed one
    if (clientID) {
      this.removeClient(clientID);
    }
    this.clients.push(client);
    this.storage.set("clientBaseClients", this.clients);
  }

  removeClient(id: number) {
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

  //makes a copy of clients to use each time clients neede
  getClients() {
    return this.clients.slice();
  }

  //gets all clients from storage 1 time when launched the app
  fetchClients() {
    this.storage.get("clientBaseClients").then((val) => {
      this.clients = val || [];
      // console.log(this.clients);
      // console.log("client[0] " + this.clients[0]);
      // console.log ("muudatused");
    });
  }

  //sets new language of the app
  setLanguage(language: string, setToStorage: boolean) {
    this.language = language;
    if (setToStorage) {
      this.storage.set("clientBaseLanguage", this.language);
      this.languageSource.next("Language changed");
    }
  }

  //makes a copy of language to use in every page
  getLanguage() {
    return this.language.slice();
  }

  //gets the language of the app when launched
  fetchLanguage() {
    return this.storage.get("clientBaseLanguage");
  }
}
