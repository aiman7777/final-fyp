import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaMusaPageRoutingModule } from './doa-musa-routing.module';

import { DoaMusaPage } from './doa-musa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaMusaPageRoutingModule
  ],
  declarations: [DoaMusaPage]
})
export class DoaMusaPageModule {}
