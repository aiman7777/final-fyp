import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidSyuibPage } from './vid-syuib.page';

const routes: Routes = [
  {
    path: '',
    component: VidSyuibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidSyuibPageRoutingModule {}
