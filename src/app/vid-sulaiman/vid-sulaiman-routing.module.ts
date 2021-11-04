import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidSulaimanPage } from './vid-sulaiman.page';

const routes: Routes = [
  {
    path: '',
    component: VidSulaimanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidSulaimanPageRoutingModule {}
