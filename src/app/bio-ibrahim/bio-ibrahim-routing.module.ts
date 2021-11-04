import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioIbrahimPage } from './bio-ibrahim.page';

const routes: Routes = [
  {
    path: '',
    component: BioIbrahimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioIbrahimPageRoutingModule {}
