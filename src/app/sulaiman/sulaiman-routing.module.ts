import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SulaimanPage } from './sulaiman.page';

const routes: Routes = [
  {
    path: '',
    component: SulaimanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SulaimanPageRoutingModule {}
