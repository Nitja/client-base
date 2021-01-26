import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClientPageRoutingModule } from './add-client-routing.module';

import { AddClientPage } from './add-client.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddClientPageRoutingModule,
    TranslateModule
  ],
  declarations: [AddClientPage]
})
export class AddClientPageModule {}
