import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidIsaPageRoutingModule } from './vid-isa-routing.module';

import { VidIsaPage } from './vid-isa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidIsaPageRoutingModule
  ],
  declarations: [VidIsaPage]
})
export class VidIsaPageModule {}
