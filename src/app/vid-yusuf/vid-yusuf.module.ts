import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidYusufPageRoutingModule } from './vid-yusuf-routing.module';

import { VidYusufPage } from './vid-yusuf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidYusufPageRoutingModule
  ],
  declarations: [VidYusufPage]
})
export class VidYusufPageModule {}
