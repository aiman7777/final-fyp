import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidAdamPage } from './vid-adam.page';

const routes: Routes = [
  {
    path: '',
    component: VidAdamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidAdamPageRoutingModule {}
