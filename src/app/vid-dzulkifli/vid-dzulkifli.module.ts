import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidDzulkifliPageRoutingModule } from './vid-dzulkifli-routing.module';

import { VidDzulkifliPage } from './vid-dzulkifli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidDzulkifliPageRoutingModule
  ],
  declarations: [VidDzulkifliPage]
})
export class VidDzulkifliPageModule {}
