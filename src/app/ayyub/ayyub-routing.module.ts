import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyyubPage } from './ayyub.page';

const routes: Routes = [
  {
    path: '',
    component: AyyubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyyubPageRoutingModule {}
