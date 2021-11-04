import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioYaqubPage } from './bio-yaqub.page';

const routes: Routes = [
  {
    path: '',
    component: BioYaqubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioYaqubPageRoutingModule {}
