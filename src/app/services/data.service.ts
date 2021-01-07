import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public clients = [];
  public products = [];
  public sales = [];

  constructor() { }

  addClient(form) {
    //clients on juba v]etud ]ppi alguses fetchi abiga
    let client = form;
    if(client.photo){
      let photo = document.getElementById("photo");
      client.photo = this.getBase64Image(photo);
    }
    
    this.clients.push(client);
    localStorage.setItem("clientBaseClients", JSON.stringify(this.clients));
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

  getClientsSortedByName()
  {
    return this.getClients().sort((a, b) => a.name > b.name ? 1 : -1);
  }

  getClients() {
    return this.clients.slice(); //makes a copy of clients
  }

  fetchClients()
  {
    this.clients = JSON.parse(localStorage.getItem("clientBaseClients")) || [];
  }
}
