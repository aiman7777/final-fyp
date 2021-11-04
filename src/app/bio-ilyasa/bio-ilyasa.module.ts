import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioIlyasaPageRoutingModule } from './bio-ilyasa-routing.module';

import { BioIlyasaPage } from './bio-ilyasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioIlyasaPageRoutingModule
  ],
  declarations: [BioIlyasaPage]
})
export class BioIlyasaPageModule {}
