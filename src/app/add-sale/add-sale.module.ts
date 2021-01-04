import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSalePageRoutingModule } from './add-sale-routing.module';

import { AddSalePage } from './add-sale.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSalePageRoutingModule,
    TranslateModule
  ],
  declarations: [AddSalePage]
})
export class AddSalePageModule {}
