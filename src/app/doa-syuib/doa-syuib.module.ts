import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaSyuibPageRoutingModule } from './doa-syuib-routing.module';

import { DoaSyuibPage } from './doa-syuib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaSyuibPageRoutingModule
  ],
  declarations: [DoaSyuibPage]
})
export class DoaSyuibPageModule {}
