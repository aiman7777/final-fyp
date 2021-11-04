import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioYunusPage } from './bio-yunus.page';

const routes: Routes = [
  {
    path: '',
    component: BioYunusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioYunusPageRoutingModule {}
