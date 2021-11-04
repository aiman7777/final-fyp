import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioIshaqPageRoutingModule } from './bio-ishaq-routing.module';

import { BioIshaqPage } from './bio-ishaq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioIshaqPageRoutingModule
  ],
  declarations: [BioIshaqPage]
})
export class BioIshaqPageModule {}
