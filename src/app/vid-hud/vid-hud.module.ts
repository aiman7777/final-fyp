import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidHudPageRoutingModule } from './vid-hud-routing.module';

import { VidHudPage } from './vid-hud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidHudPageRoutingModule
  ],
  declarations: [VidHudPage]
})
export class VidHudPageModule {}
