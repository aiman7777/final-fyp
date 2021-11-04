import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidYahyaPageRoutingModule } from './vid-yahya-routing.module';

import { VidYahyaPage } from './vid-yahya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidYahyaPageRoutingModule
  ],
  declarations: [VidYahyaPage]
})
export class VidYahyaPageModule {}
