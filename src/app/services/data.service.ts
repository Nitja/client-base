import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NativeStorage } from "@ionic-native/native-storage/ngx";

@Injectable({
  providedIn: "root",
})
export class DataService {
  public clients = [];
  public products = [];
  public sales = [];

  constructor(private storage: Storage, private nativeStorage: NativeStorage) {}

  addClient(form) {
    //client have already gotten when app launched in fetchClients()
    let client = form.value;
    
    console.log("Clients: " + this.clients);
    console.log("Form.value " + form.value);
    console.log("Client" + client);

    if (client.photo) {
      let photo = document.getElementById("photo");
      client.photo = this.getBase64Image(photo);
    }
    console.log("Client photo " + client.photo);
    this.clients.push(client);
    //console.log(this.clients);
    localStorage.setItem("clientBaseClients", JSON.stringify(this.clients));
    this.storage.set("clientBaseClients", JSON.stringify(this.clients));
    this.nativeStorage.setItem("clientBaseClients", JSON.stringify(this.clients)
    );
  }

  removeClient(id) {
    console.log("remove client from id = " + id);
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    console.log("dataURL: " + dataURL);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  getClientsSortedByName() {
    return this.getClients().sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  getClients() {
    return this.clients.slice(); //makes a copy of clients
  }

  fetchClients() {
 //   this.clients = JSON.parse(localStorage.getItem("clientBaseClients")) || [];
  //  console.log("Clients from localstorage: ", this.clients);

    //  this.storage.set("clientBaseClients", JSON.stringify(this.clients));
    //  console.log("storage from stringify " + this.clients);

    //  this.clients = JSON.parse(localStorage.getItem("clientBaseClients")) || [];
    //  this.storage.set("clientBaseClients", this.clients);
    //  console.log("storage without stringify " + this.storage);

    // this.clients = JSON.parse(await this.storage.get("clientBaseClients")) || [];
    // this.storage.get("clientBaseClients") || [];
    // console.log("storage = " + this.storage);

    // this.storage.get('clientBaseClients').then((val) => {
    //   console.log('clientBaseClients: ', val);
    //   this.clients = val;
    //   console.log('Clients: ', this.clients);
    //   console.log('Client [0]: ', this.clients[0]);
    // });


    //native storage v1
    // this.nativeStorage.setItem('clientBaseClients', JSON.stringify(this.clients));
    // console.log("native storage " + this.nativeStorage);
    // this.nativeStorage.getItem('clientBaseClients').then((val) => {
    //   console.log('Clients from nativestorage1: ', JSON.parse(val));
    // });


    //native storage v2
    // this.nativeStorage
    //   .setItem("clientBaseClients", JSON.stringify(this.clients))
    //   .then(
    //     () => console.log("Stored item!"),
    //     (error) => console.error("Error storing item", error)
    //   );

    this.nativeStorage.getItem("clientBaseClients").then(
      (data) => { console.log('Clients from nativestorage2: '+ data),  this.clients = data },
      (error) => console.error(error)
    );
  }
}
