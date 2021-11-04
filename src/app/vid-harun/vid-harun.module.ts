import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidHarunPageRoutingModule } from './vid-harun-routing.module';

import { VidHarunPage } from './vid-harun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidHarunPageRoutingModule
  ],
  declarations: [VidHarunPage]
})
export class VidHarunPageModule {}
