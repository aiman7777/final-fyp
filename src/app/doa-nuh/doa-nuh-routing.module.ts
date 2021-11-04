import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaNuhPage } from './doa-nuh.page';

const routes: Routes = [
  {
    path: '',
    component: DoaNuhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaNuhPageRoutingModule {}
