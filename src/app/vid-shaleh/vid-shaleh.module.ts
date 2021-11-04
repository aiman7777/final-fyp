import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidShalehPageRoutingModule } from './vid-shaleh-routing.module';

import { VidShalehPage } from './vid-shaleh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidShalehPageRoutingModule
  ],
  declarations: [VidShalehPage]
})
export class VidShalehPageModule {}
