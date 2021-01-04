import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage {
  products;
  showRemoveButton = true;

  constructor() {}

  ionViewDidEnter() {
    this.products = JSON.parse(localStorage.getItem("clientBaseProducts")) || [];
  }

  onRemoveClient() {

  }
}
