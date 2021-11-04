import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaYaqubPageRoutingModule } from './doa-yaqub-routing.module';

import { DoaYaqubPage } from './doa-yaqub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaYaqubPageRoutingModule
  ],
  declarations: [DoaYaqubPage]
})
export class DoaYaqubPageModule {}
