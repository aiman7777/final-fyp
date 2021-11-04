import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioYusufPageRoutingModule } from './bio-yusuf-routing.module';

import { BioYusufPage } from './bio-yusuf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioYusufPageRoutingModule
  ],
  declarations: [BioYusufPage]
})
export class BioYusufPageModule {}
