import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YunusPageRoutingModule } from './yunus-routing.module';

import { YunusPage } from './yunus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YunusPageRoutingModule
  ],
  declarations: [YunusPage]
})
export class YunusPageModule {}
