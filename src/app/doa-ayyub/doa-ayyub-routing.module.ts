import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaAyyubPage } from './doa-ayyub.page';

const routes: Routes = [
  {
    path: '',
    component: DoaAyyubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaAyyubPageRoutingModule {}
