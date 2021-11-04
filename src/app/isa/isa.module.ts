import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IsaPageRoutingModule } from './isa-routing.module';

import { IsaPage } from './isa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IsaPageRoutingModule
  ],
  declarations: [IsaPage]
})
export class IsaPageModule {}
