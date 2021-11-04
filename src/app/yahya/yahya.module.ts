import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YahyaPageRoutingModule } from './yahya-routing.module';

import { YahyaPage } from './yahya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YahyaPageRoutingModule
  ],
  declarations: [YahyaPage]
})
export class YahyaPageModule {}
