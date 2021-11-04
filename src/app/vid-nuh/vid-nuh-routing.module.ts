import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidNuhPage } from './vid-nuh.page';

const routes: Routes = [
  {
    path: '',
    component: VidNuhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidNuhPageRoutingModule {}
