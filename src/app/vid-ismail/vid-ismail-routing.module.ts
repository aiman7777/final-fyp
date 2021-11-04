import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidIsmailPage } from './vid-ismail.page';

const routes: Routes = [
  {
    path: '',
    component: VidIsmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidIsmailPageRoutingModule {}
