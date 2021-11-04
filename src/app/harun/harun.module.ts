import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarunPageRoutingModule } from './harun-routing.module';

import { HarunPage } from './harun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarunPageRoutingModule
  ],
  declarations: [HarunPage]
})
export class HarunPageModule {}
