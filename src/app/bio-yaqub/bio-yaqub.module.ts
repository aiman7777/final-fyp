import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioYaqubPageRoutingModule } from './bio-yaqub-routing.module';

import { BioYaqubPage } from './bio-yaqub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioYaqubPageRoutingModule
  ],
  declarations: [BioYaqubPage]
})
export class BioYaqubPageModule {}
