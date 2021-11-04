import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaYaqubPage } from './doa-yaqub.page';

const routes: Routes = [
  {
    path: '',
    component: DoaYaqubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaYaqubPageRoutingModule {}
