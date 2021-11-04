import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidIlyasaPageRoutingModule } from './vid-ilyasa-routing.module';

import { VidIlyasaPage } from './vid-ilyasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidIlyasaPageRoutingModule
  ],
  declarations: [VidIlyasaPage]
})
export class VidIlyasaPageModule {}
