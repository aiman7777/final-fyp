import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioHudPageRoutingModule } from './bio-hud-routing.module';

import { BioHudPage } from './bio-hud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioHudPageRoutingModule
  ],
  declarations: [BioHudPage]
})
export class BioHudPageModule {}
