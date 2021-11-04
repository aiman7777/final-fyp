import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidIdrisPageRoutingModule } from './vid-idris-routing.module';

import { VidIdrisPage } from './vid-idris.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidIdrisPageRoutingModule
  ],
  declarations: [VidIdrisPage]
})
export class VidIdrisPageModule {}
