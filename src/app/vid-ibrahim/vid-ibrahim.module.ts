import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidIbrahimPageRoutingModule } from './vid-ibrahim-routing.module';

import { VidIbrahimPage } from './vid-ibrahim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidIbrahimPageRoutingModule
  ],
  declarations: [VidIbrahimPage]
})
export class VidIbrahimPageModule {}
