import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioSyuibPageRoutingModule } from './bio-syuib-routing.module';

import { BioSyuibPage } from './bio-syuib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioSyuibPageRoutingModule
  ],
  declarations: [BioSyuibPage]
})
export class BioSyuibPageModule {}
