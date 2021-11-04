import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IbrahimPage } from './ibrahim.page';

const routes: Routes = [
  {
    path: '',
    component: IbrahimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IbrahimPageRoutingModule {}
