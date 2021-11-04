import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidIlyasPage } from './vid-ilyas.page';

const routes: Routes = [
  {
    path: '',
    component: VidIlyasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidIlyasPageRoutingModule {}
