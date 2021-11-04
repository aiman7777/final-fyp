import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaudPageRoutingModule } from './daud-routing.module';

import { DaudPage } from './daud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaudPageRoutingModule
  ],
  declarations: [DaudPage]
})
export class DaudPageModule {}
