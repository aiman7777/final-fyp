import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioAdamPage } from './bio-adam.page';

const routes: Routes = [
  {
    path: '',
    component: BioAdamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioAdamPageRoutingModule {}
