import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioLuthPage } from './bio-luth.page';

const routes: Routes = [
  {
    path: '',
    component: BioLuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioLuthPageRoutingModule {}
