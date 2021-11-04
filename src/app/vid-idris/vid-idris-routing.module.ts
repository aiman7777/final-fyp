import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidIdrisPage } from './vid-idris.page';

const routes: Routes = [
  {
    path: '',
    component: VidIdrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidIdrisPageRoutingModule {}
