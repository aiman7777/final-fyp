import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioIsmailPage } from './bio-ismail.page';

const routes: Routes = [
  {
    path: '',
    component: BioIsmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioIsmailPageRoutingModule {}
