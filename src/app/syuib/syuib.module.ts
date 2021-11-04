import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SyuibPageRoutingModule } from './syuib-routing.module';

import { SyuibPage } from './syuib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SyuibPageRoutingModule
  ],
  declarations: [SyuibPage]
})
export class SyuibPageModule {}
