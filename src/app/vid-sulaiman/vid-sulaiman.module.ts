import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidSulaimanPageRoutingModule } from './vid-sulaiman-routing.module';

import { VidSulaimanPage } from './vid-sulaiman.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidSulaimanPageRoutingModule
  ],
  declarations: [VidSulaimanPage]
})
export class VidSulaimanPageModule {}
