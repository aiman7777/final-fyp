import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidNuhPageRoutingModule } from './vid-nuh-routing.module';

import { VidNuhPage } from './vid-nuh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidNuhPageRoutingModule
  ],
  declarations: [VidNuhPage]
})
export class VidNuhPageModule {}
