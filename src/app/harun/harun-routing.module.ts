import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarunPage } from './harun.page';

const routes: Routes = [
  {
    path: '',
    component: HarunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarunPageRoutingModule {}
