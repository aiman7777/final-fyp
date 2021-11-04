import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidYaqubPageRoutingModule } from './vid-yaqub-routing.module';

import { VidYaqubPage } from './vid-yaqub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidYaqubPageRoutingModule
  ],
  declarations: [VidYaqubPage]
})
export class VidYaqubPageModule {}
