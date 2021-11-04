import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidMuhammadPage } from './vid-muhammad.page';

const routes: Routes = [
  {
    path: '',
    component: VidMuhammadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidMuhammadPageRoutingModule {}
