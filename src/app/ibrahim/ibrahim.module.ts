import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IbrahimPageRoutingModule } from './ibrahim-routing.module';

import { IbrahimPage } from './ibrahim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IbrahimPageRoutingModule
  ],
  declarations: [IbrahimPage]
})
export class IbrahimPageModule {}
