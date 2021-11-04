import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioYunusPageRoutingModule } from './bio-yunus-routing.module';

import { BioYunusPage } from './bio-yunus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioYunusPageRoutingModule
  ],
  declarations: [BioYunusPage]
})
export class BioYunusPageModule {}
