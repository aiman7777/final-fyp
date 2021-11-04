import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MuhammadPageRoutingModule } from './muhammad-routing.module';

import { MuhammadPage } from './muhammad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MuhammadPageRoutingModule
  ],
  declarations: [MuhammadPage]
})
export class MuhammadPageModule {}
