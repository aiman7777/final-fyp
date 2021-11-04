import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidMuhammadPageRoutingModule } from './vid-muhammad-routing.module';

import { VidMuhammadPage } from './vid-muhammad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidMuhammadPageRoutingModule
  ],
  declarations: [VidMuhammadPage]
})
export class VidMuhammadPageModule {}
