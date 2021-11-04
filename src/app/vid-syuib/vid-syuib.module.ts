import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidSyuibPageRoutingModule } from './vid-syuib-routing.module';

import { VidSyuibPage } from './vid-syuib.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidSyuibPageRoutingModule
  ],
  declarations: [VidSyuibPage]
})
export class VidSyuibPageModule {}
