import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShalehPage } from './shaleh.page';

const routes: Routes = [
  {
    path: '',
    component: ShalehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShalehPageRoutingModule {}
