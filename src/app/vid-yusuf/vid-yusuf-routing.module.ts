import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidYusufPage } from './vid-yusuf.page';

const routes: Routes = [
  {
    path: '',
    component: VidYusufPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidYusufPageRoutingModule {}
