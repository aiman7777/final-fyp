import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioNuhPage } from './bio-nuh.page';

const routes: Routes = [
  {
    path: '',
    component: BioNuhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioNuhPageRoutingModule {}
