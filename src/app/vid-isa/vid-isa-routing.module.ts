import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidIsaPage } from './vid-isa.page';

const routes: Routes = [
  {
    path: '',
    component: VidIsaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidIsaPageRoutingModule {}
