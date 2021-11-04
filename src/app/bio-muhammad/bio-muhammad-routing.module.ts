import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioMuhammadPage } from './bio-muhammad.page';

const routes: Routes = [
  {
    path: '',
    component: BioMuhammadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioMuhammadPageRoutingModule {}
