import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioAdamPageRoutingModule } from './bio-adam-routing.module';

import { BioAdamPage } from './bio-adam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioAdamPageRoutingModule
  ],
  declarations: [BioAdamPage]
})
export class BioAdamPageModule {}
