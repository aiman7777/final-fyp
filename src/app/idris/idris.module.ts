import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IdrisPageRoutingModule } from './idris-routing.module';

import { IdrisPage } from './idris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IdrisPageRoutingModule
  ],
  declarations: [IdrisPage]
})
export class IdrisPageModule {}
