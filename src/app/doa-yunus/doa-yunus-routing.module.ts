import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaYunusPage } from './doa-yunus.page';

const routes: Routes = [
  {
    path: '',
    component: DoaYunusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaYunusPageRoutingModule {}
