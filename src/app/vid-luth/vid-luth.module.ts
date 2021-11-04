import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidLuthPageRoutingModule } from './vid-luth-routing.module';

import { VidLuthPage } from './vid-luth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidLuthPageRoutingModule
  ],
  declarations: [VidLuthPage]
})
export class VidLuthPageModule {}
