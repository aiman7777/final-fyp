import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidIlyasPageRoutingModule } from './vid-ilyas-routing.module';

import { VidIlyasPage } from './vid-ilyas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidIlyasPageRoutingModule
  ],
  declarations: [VidIlyasPage]
})
export class VidIlyasPageModule {}
