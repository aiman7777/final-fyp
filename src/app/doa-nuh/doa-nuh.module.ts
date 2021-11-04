import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaNuhPageRoutingModule } from './doa-nuh-routing.module';

import { DoaNuhPage } from './doa-nuh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaNuhPageRoutingModule
  ],
  declarations: [DoaNuhPage]
})
export class DoaNuhPageModule {}
