import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YusufPage } from './yusuf.page';

const routes: Routes = [
  {
    path: '',
    component: YusufPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YusufPageRoutingModule {}
