import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsmailPageRoutingModule } from './ismail-routing.module';

import { IsmailPage } from './ismail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsmailPageRoutingModule
  ],
  declarations: [IsmailPage]
})
export class IsmailPageModule {}
