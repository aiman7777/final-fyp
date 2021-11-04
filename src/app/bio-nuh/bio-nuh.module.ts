import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioNuhPageRoutingModule } from './bio-nuh-routing.module';

import { BioNuhPage } from './bio-nuh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioNuhPageRoutingModule
  ],
  declarations: [BioNuhPage]
})
export class BioNuhPageModule {}
