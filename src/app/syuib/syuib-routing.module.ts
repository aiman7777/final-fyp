import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SyuibPage } from './syuib.page';

const routes: Routes = [
  {
    path: '',
    component: SyuibPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SyuibPageRoutingModule {}
