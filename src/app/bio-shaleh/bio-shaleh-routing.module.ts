import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioShalehPage } from './bio-shaleh.page';

const routes: Routes = [
  {
    path: '',
    component: BioShalehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioShalehPageRoutingModule {}
