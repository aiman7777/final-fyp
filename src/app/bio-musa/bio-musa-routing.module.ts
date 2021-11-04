import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioMusaPage } from './bio-musa.page';

const routes: Routes = [
  {
    path: '',
    component: BioMusaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioMusaPageRoutingModule {}
