import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShalehPageRoutingModule } from './shaleh-routing.module';

import { ShalehPage } from './shaleh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShalehPageRoutingModule
  ],
  declarations: [ShalehPage]
})
export class ShalehPageModule {}
