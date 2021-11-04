import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidZakariaPageRoutingModule } from './vid-zakaria-routing.module';

import { VidZakariaPage } from './vid-zakaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidZakariaPageRoutingModule
  ],
  declarations: [VidZakariaPage]
})
export class VidZakariaPageModule {}
