import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioMuhammadPageRoutingModule } from './bio-muhammad-routing.module';

import { BioMuhammadPage } from './bio-muhammad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioMuhammadPageRoutingModule
  ],
  declarations: [BioMuhammadPage]
})
export class BioMuhammadPageModule {}
