import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioIlyasPageRoutingModule } from './bio-ilyas-routing.module';

import { BioIlyasPage } from './bio-ilyas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioIlyasPageRoutingModule
  ],
  declarations: [BioIlyasPage]
})
export class BioIlyasPageModule {}
