import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidIsmailPageRoutingModule } from './vid-ismail-routing.module';

import { VidIsmailPage } from './vid-ismail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidIsmailPageRoutingModule
  ],
  declarations: [VidIsmailPage]
})
export class VidIsmailPageModule {}
