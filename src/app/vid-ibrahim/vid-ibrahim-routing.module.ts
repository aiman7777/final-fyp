import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidIbrahimPage } from './vid-ibrahim.page';

const routes: Routes = [
  {
    path: '',
    component: VidIbrahimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidIbrahimPageRoutingModule {}
