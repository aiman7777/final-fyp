import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidYunusPageRoutingModule } from './vid-yunus-routing.module';

import { VidYunusPage } from './vid-yunus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidYunusPageRoutingModule
  ],
  declarations: [VidYunusPage]
})
export class VidYunusPageModule {}
