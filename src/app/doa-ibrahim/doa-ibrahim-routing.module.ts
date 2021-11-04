import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaIbrahimPage } from './doa-ibrahim.page';

const routes: Routes = [
  {
    path: '',
    component: DoaIbrahimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaIbrahimPageRoutingModule {}
