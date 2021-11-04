import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioIdrisPage } from './bio-idris.page';

const routes: Routes = [
  {
    path: '',
    component: BioIdrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioIdrisPageRoutingModule {}
