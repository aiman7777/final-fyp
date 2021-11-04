import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaSulaimanPageRoutingModule } from './doa-sulaiman-routing.module';

import { DoaSulaimanPage } from './doa-sulaiman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaSulaimanPageRoutingModule
  ],
  declarations: [DoaSulaimanPage]
})
export class DoaSulaimanPageModule {}
