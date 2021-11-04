import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaYunusPageRoutingModule } from './doa-yunus-routing.module';

import { DoaYunusPage } from './doa-yunus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaYunusPageRoutingModule
  ],
  declarations: [DoaYunusPage]
})
export class DoaYunusPageModule {}
