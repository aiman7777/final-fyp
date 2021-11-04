import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidAyyubPageRoutingModule } from './vid-ayyub-routing.module';

import { VidAyyubPage } from './vid-ayyub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidAyyubPageRoutingModule
  ],
  declarations: [VidAyyubPage]
})
export class VidAyyubPageModule {}
