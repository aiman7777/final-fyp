import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioMusaPageRoutingModule } from './bio-musa-routing.module';

import { BioMusaPage } from './bio-musa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioMusaPageRoutingModule
  ],
  declarations: [BioMusaPage]
})
export class BioMusaPageModule {}
