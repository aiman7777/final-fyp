import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaYusufPageRoutingModule } from './doa-yusuf-routing.module';

import { DoaYusufPage } from './doa-yusuf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaYusufPageRoutingModule
  ],
  declarations: [DoaYusufPage]
})
export class DoaYusufPageModule {}
