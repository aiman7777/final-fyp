import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioLuthPageRoutingModule } from './bio-luth-routing.module';

import { BioLuthPage } from './bio-luth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioLuthPageRoutingModule
  ],
  declarations: [BioLuthPage]
})
export class BioLuthPageModule {}
