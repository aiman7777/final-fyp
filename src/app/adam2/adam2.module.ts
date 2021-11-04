import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Adam2PageRoutingModule } from './adam2-routing.module';

import { Adam2Page } from './adam2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Adam2PageRoutingModule
  ],
  declarations: [Adam2Page]
})
export class Adam2PageModule {}
