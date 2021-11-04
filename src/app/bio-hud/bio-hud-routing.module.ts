import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioHudPage } from './bio-hud.page';

const routes: Routes = [
  {
    path: '',
    component: BioHudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioHudPageRoutingModule {}
