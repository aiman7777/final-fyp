import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZakariaPage } from './zakaria.page';

const routes: Routes = [
  {
    path: '',
    component: ZakariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZakariaPageRoutingModule {}
