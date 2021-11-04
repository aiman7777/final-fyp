import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaHudPage } from './doa-hud.page';

const routes: Routes = [
  {
    path: '',
    component: DoaHudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaHudPageRoutingModule {}
