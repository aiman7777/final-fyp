import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioSulaimanPage } from './bio-sulaiman.page';

const routes: Routes = [
  {
    path: '',
    component: BioSulaimanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioSulaimanPageRoutingModule {}
