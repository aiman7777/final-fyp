import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioSyuibPage } from './bio-syuib.page';

const routes: Routes = [
  {
    path: '',
    component: BioSyuibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioSyuibPageRoutingModule {}
