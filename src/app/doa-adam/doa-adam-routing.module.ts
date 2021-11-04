import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaAdamPage } from './doa-adam.page';

const routes: Routes = [
  {
    path: '',
    component: DoaAdamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaAdamPageRoutingModule {}
