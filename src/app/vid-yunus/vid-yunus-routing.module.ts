import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidYunusPage } from './vid-yunus.page';

const routes: Routes = [
  {
    path: '',
    component: VidYunusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidYunusPageRoutingModule {}
