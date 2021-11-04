import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioIshaqPage } from './bio-ishaq.page';

const routes: Routes = [
  {
    path: '',
    component: BioIshaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioIshaqPageRoutingModule {}
