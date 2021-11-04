import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusaPageRoutingModule } from './musa-routing.module';

import { MusaPage } from './musa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusaPageRoutingModule
  ],
  declarations: [MusaPage]
})
export class MusaPageModule {}
