import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sales = [];
  showRemoveButton = true;

  constructor() {}

  ionViewDidEnter() {
    this.sales = JSON.parse(localStorage.getItem("sales")) || [];
  }

  onRemoveSale() {

  }

}
