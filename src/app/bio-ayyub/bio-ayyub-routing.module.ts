import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioAyyubPage } from './bio-ayyub.page';

const routes: Routes = [
  {
    path: '',
    component: BioAyyubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioAyyubPageRoutingModule {}
