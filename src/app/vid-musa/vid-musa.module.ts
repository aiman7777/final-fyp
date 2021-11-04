import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidMusaPageRoutingModule } from './vid-musa-routing.module';

import { VidMusaPage } from './vid-musa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidMusaPageRoutingModule
  ],
  declarations: [VidMusaPage]
})
export class VidMusaPageModule {}
