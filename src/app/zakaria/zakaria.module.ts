import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZakariaPageRoutingModule } from './zakaria-routing.module';

import { ZakariaPage } from './zakaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZakariaPageRoutingModule
  ],
  declarations: [ZakariaPage]
})
export class ZakariaPageModule {}
