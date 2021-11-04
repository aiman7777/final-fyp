import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidLuthPage } from './vid-luth.page';

const routes: Routes = [
  {
    path: '',
    component: VidLuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidLuthPageRoutingModule {}
