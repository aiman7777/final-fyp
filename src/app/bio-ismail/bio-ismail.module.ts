import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioIsmailPageRoutingModule } from './bio-ismail-routing.module';

import { BioIsmailPage } from './bio-ismail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BioIsmailPageRoutingModule
  ],
  declarations: [BioIsmailPage]
})
export class BioIsmailPageModule {}
