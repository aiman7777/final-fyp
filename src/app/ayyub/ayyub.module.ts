import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyyubPageRoutingModule } from './ayyub-routing.module';

import { AyyubPage } from './ayyub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyyubPageRoutingModule
  ],
  declarations: [AyyubPage]
})
export class AyyubPageModule {}
