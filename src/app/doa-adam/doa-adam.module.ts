import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoaAdamPageRoutingModule } from './doa-adam-routing.module';

import { DoaAdamPage } from './doa-adam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoaAdamPageRoutingModule
  ],
  declarations: [DoaAdamPage]
})
export class DoaAdamPageModule {}
