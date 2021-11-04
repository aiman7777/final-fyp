import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuhPageRoutingModule } from './nuh-routing.module';

import { NuhPage } from './nuh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuhPageRoutingModule
  ],
  declarations: [NuhPage]
})
export class NuhPageModule {}
