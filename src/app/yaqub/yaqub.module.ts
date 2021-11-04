import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YaqubPageRoutingModule } from './yaqub-routing.module';

import { YaqubPage } from './yaqub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YaqubPageRoutingModule
  ],
  declarations: [YaqubPage]
})
export class YaqubPageModule {}
