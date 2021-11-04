import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidHarunPage } from './vid-harun.page';

const routes: Routes = [
  {
    path: '',
    component: VidHarunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidHarunPageRoutingModule {}
