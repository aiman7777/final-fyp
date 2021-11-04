import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidIshaqPageRoutingModule } from './vid-ishaq-routing.module';

import { VidIshaqPage } from './vid-ishaq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidIshaqPageRoutingModule
  ],
  declarations: [VidIshaqPage]
})
export class VidIshaqPageModule {}
