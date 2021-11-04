import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuthPageRoutingModule } from './luth-routing.module';

import { LuthPage } from './luth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuthPageRoutingModule
  ],
  declarations: [LuthPage]
})
export class LuthPageModule {}
