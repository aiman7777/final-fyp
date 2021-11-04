import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidZakariaPage } from './vid-zakaria.page';

const routes: Routes = [
  {
    path: '',
    component: VidZakariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidZakariaPageRoutingModule {}
