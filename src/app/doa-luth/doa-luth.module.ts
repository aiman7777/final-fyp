import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaLuthPageRoutingModule } from './doa-luth-routing.module';

import { DoaLuthPage } from './doa-luth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaLuthPageRoutingModule
  ],
  declarations: [DoaLuthPage]
})
export class DoaLuthPageModule {}
