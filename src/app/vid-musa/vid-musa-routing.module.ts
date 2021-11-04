import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidMusaPage } from './vid-musa.page';

const routes: Routes = [
  {
    path: '',
    component: VidMusaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidMusaPageRoutingModule {}
