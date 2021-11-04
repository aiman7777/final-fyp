import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioIdrisPageRoutingModule } from './bio-idris-routing.module';

import { BioIdrisPage } from './bio-idris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioIdrisPageRoutingModule
  ],
  declarations: [BioIdrisPage]
})
export class BioIdrisPageModule {}
