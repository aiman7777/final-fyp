import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioYahyaPageRoutingModule } from './bio-yahya-routing.module';

import { BioYahyaPage } from './bio-yahya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioYahyaPageRoutingModule
  ],
  declarations: [BioYahyaPage]
})
export class BioYahyaPageModule {}
