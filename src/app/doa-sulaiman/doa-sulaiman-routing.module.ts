import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaSulaimanPage } from './doa-sulaiman.page';

const routes: Routes = [
  {
    path: '',
    component: DoaSulaimanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaSulaimanPageRoutingModule {}
