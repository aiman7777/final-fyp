import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoaMusaPage } from './doa-musa.page';

const routes: Routes = [
  {
    path: '',
    component: DoaMusaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoaMusaPageRoutingModule {}
