import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Log2PageRoutingModule } from './log2-routing.module';

import { Log2Page } from './log2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Log2PageRoutingModule
  ],
  declarations: [Log2Page]
})
export class Log2PageModule {}
