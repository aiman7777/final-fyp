import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioHarunPageRoutingModule } from './bio-harun-routing.module';

import { BioHarunPage } from './bio-harun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioHarunPageRoutingModule
  ],
  declarations: [BioHarunPage]
})
export class BioHarunPageModule {}
