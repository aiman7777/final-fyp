import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidAdamPageRoutingModule } from './vid-adam-routing.module';

import { VidAdamPage } from './vid-adam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidAdamPageRoutingModule
  ],
  declarations: [VidAdamPage]
})
export class VidAdamPageModule {}
