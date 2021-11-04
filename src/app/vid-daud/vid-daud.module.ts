import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidDaudPageRoutingModule } from './vid-daud-routing.module';

import { VidDaudPage } from './vid-daud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidDaudPageRoutingModule
  ],
  declarations: [VidDaudPage]
})
export class VidDaudPageModule {}
