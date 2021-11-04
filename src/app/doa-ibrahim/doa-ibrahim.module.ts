import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaIbrahimPageRoutingModule } from './doa-ibrahim-routing.module';

import { DoaIbrahimPage } from './doa-ibrahim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaIbrahimPageRoutingModule
  ],
  declarations: [DoaIbrahimPage]
})
export class DoaIbrahimPageModule {}
