import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioIsaPage } from './bio-isa.page';

const routes: Routes = [
  {
    path: '',
    component: BioIsaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioIsaPageRoutingModule {}
