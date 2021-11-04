import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaZakariaPage } from './doa-zakaria.page';

const routes: Routes = [
  {
    path: '',
    component: DoaZakariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaZakariaPageRoutingModule {}
