import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioZakariaPageRoutingModule } from './bio-zakaria-routing.module';

import { BioZakariaPage } from './bio-zakaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioZakariaPageRoutingModule
  ],
  declarations: [BioZakariaPage]
})
export class BioZakariaPageModule {}
