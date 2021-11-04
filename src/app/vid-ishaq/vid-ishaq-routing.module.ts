import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidIshaqPage } from './vid-ishaq.page';

const routes: Routes = [
  {
    path: '',
    component: VidIshaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidIshaqPageRoutingModule {}
