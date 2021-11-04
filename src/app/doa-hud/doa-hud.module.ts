import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaHudPageRoutingModule } from './doa-hud-routing.module';

import { DoaHudPage } from './doa-hud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaHudPageRoutingModule
  ],
  declarations: [DoaHudPage]
})
export class DoaHudPageModule {}
