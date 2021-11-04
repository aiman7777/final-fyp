import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioSulaimanPageRoutingModule } from './bio-sulaiman-routing.module';

import { BioSulaimanPage } from './bio-sulaiman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioSulaimanPageRoutingModule
  ],
  declarations: [BioSulaimanPage]
})
export class BioSulaimanPageModule {}
