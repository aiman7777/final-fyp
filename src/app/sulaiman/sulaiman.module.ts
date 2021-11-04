import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SulaimanPageRoutingModule } from './sulaiman-routing.module';

import { SulaimanPage } from './sulaiman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SulaimanPageRoutingModule
  ],
  declarations: [SulaimanPage]
})
export class SulaimanPageModule {}
