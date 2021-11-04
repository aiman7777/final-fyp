import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuthPage } from './luth.page';

const routes: Routes = [
  {
    path: '',
    component: LuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuthPageRoutingModule {}
