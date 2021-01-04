import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DebtsPageRoutingModule } from './debts-routing.module';

import { DebtsPage } from './debts.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DebtsPageRoutingModule,
    TranslateModule
  ],
  declarations: [DebtsPage]
})
export class DebtsPageModule {}
