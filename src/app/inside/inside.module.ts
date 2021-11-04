import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsidePageRoutingModule } from './inside-routing.module';

import { insidePage } from './inside.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsidePageRoutingModule
  ],
  declarations: [insidePage]
})
export class InsidePageModule {}
