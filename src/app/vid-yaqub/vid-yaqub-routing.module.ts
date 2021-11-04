import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidYaqubPage } from './vid-yaqub.page';

const routes: Routes = [
  {
    path: '',
    component: VidYaqubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidYaqubPageRoutingModule {}
