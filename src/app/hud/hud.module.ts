import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HudPageRoutingModule } from './hud-routing.module';

import { HudPage } from './hud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HudPageRoutingModule
  ],
  declarations: [HudPage]
})
export class HudPageModule {}
