import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaAyyubPageRoutingModule } from './doa-ayyub-routing.module';

import { DoaAyyubPage } from './doa-ayyub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaAyyubPageRoutingModule
  ],
  declarations: [DoaAyyubPage]
})
export class DoaAyyubPageModule {}
