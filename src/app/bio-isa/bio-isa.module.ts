import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioIsaPageRoutingModule } from './bio-isa-routing.module';

import { BioIsaPage } from './bio-isa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioIsaPageRoutingModule
  ],
  declarations: [BioIsaPage]
})
export class BioIsaPageModule {}
