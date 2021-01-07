import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientViewPageRoutingModule } from './client-view-routing.module';

import { ClientViewPage } from './client-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientViewPageRoutingModule
  ],
  declarations: [ClientViewPage]
})
export class ClientViewPageModule {}
