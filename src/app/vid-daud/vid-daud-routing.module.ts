import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidDaudPage } from './vid-daud.page';

const routes: Routes = [
  {
    path: '',
    component: VidDaudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidDaudPageRoutingModule {}
