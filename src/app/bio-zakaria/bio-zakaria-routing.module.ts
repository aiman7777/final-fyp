import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioZakariaPage } from './bio-zakaria.page';

const routes: Routes = [
  {
    path: '',
    component: BioZakariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioZakariaPageRoutingModule {}
