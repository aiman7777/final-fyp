import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaSyuibPage } from './doa-syuib.page';

const routes: Routes = [
  {
    path: '',
    component: DoaSyuibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaSyuibPageRoutingModule {}
