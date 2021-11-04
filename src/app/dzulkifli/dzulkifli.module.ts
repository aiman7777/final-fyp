import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DzulkifliPageRoutingModule } from './dzulkifli-routing.module';

import { DzulkifliPage } from './dzulkifli.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DzulkifliPageRoutingModule
  ],
  declarations: [DzulkifliPage]
})
export class DzulkifliPageModule {}
