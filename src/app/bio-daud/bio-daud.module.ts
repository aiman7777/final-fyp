import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioDaudPageRoutingModule } from './bio-daud-routing.module';

import { BioDaudPage } from './bio-daud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioDaudPageRoutingModule
  ],
  declarations: [BioDaudPage]
})
export class BioDaudPageModule {}
