import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidAyyubPage } from './vid-ayyub.page';

const routes: Routes = [
  {
    path: '',
    component: VidAyyubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidAyyubPageRoutingModule {}
