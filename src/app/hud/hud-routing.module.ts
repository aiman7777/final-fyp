import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HudPage } from './hud.page';

const routes: Routes = [
  {
    path: '',
    component: HudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HudPageRoutingModule {}
