import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioIbrahimPageRoutingModule } from './bio-ibrahim-routing.module';

import { BioIbrahimPage } from './bio-ibrahim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioIbrahimPageRoutingModule
  ],
  declarations: [BioIbrahimPage]
})
export class BioIbrahimPageModule {}
