import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClientPageRoutingModule } from './add-client-routing.module';

import { AddClientPage } from './add-client.page';
import { TranslateModule } from '@ngx-translate/core';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddClientPageRoutingModule,
    TranslateModule,
    TextMaskModule
  ],
  declarations: [AddClientPage]
})
export class AddClientPageModule {}
