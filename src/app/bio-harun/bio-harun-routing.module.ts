import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioHarunPage } from './bio-harun.page';

const routes: Routes = [
  {
    path: '',
    component: BioHarunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioHarunPageRoutingModule {}
