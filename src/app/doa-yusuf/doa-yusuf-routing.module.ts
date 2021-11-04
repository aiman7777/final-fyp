import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaYusufPage } from './doa-yusuf.page';

const routes: Routes = [
  {
    path: '',
    component: DoaYusufPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaYusufPageRoutingModule {}
