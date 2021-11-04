import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaudPage } from './daud.page';

const routes: Routes = [
  {
    path: '',
    component: DaudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaudPageRoutingModule {}
