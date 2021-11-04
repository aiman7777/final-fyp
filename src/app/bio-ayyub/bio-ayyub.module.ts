import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioAyyubPageRoutingModule } from './bio-ayyub-routing.module';

import { BioAyyubPage } from './bio-ayyub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioAyyubPageRoutingModule
  ],
  declarations: [BioAyyubPage]
})
export class BioAyyubPageModule {}
