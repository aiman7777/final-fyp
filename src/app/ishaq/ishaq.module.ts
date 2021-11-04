import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IshaqPageRoutingModule } from './ishaq-routing.module';

import { IshaqPage } from './ishaq.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IshaqPageRoutingModule
  ],
  declarations: [IshaqPage]
})
export class IshaqPageModule {}
