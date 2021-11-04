import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IlyasaPageRoutingModule } from './ilyasa-routing.module';

import { IlyasaPage } from './ilyasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IlyasaPageRoutingModule
  ],
  declarations: [IlyasaPage]
})
export class IlyasaPageModule {}
