import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaZakariaPageRoutingModule } from './doa-zakaria-routing.module';

import { DoaZakariaPage } from './doa-zakaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaZakariaPageRoutingModule
  ],
  declarations: [DoaZakariaPage]
})
export class DoaZakariaPageModule {}
