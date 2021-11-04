import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidShalehPage } from './vid-shaleh.page';

const routes: Routes = [
  {
    path: '',
    component: VidShalehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidShalehPageRoutingModule {}
