import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidHudPage } from './vid-hud.page';

const routes: Routes = [
  {
    path: '',
    component: VidHudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidHudPageRoutingModule {}
