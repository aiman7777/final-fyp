import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YusufPageRoutingModule } from './yusuf-routing.module';

import { YusufPage } from './yusuf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YusufPageRoutingModule
  ],
  declarations: [YusufPage]
})
export class YusufPageModule {}
