import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    //check for the image and set the standart one if missing
    let products = JSON.parse(localStorage.getItem("clientBaseProducts")) || [];
    products.push(form.value);
    localStorage.setItem("clientBaseProducts", JSON.stringify(products));

    console.log(form.value);
    form.reset();
  }
}
