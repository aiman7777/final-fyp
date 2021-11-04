import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioShalehPageRoutingModule } from './bio-shaleh-routing.module';

import { BioShalehPage } from './bio-shaleh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioShalehPageRoutingModule
  ],
  declarations: [BioShalehPage]
})
export class BioShalehPageModule {}
