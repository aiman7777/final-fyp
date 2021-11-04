import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlyasPageRoutingModule } from './ilyas-routing.module';

import { IlyasPage } from './ilyas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlyasPageRoutingModule
  ],
  declarations: [IlyasPage]
})
export class IlyasPageModule {}
