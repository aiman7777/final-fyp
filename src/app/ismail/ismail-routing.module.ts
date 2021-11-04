import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IsmailPage } from './ismail.page';

const routes: Routes = [
  {
    path: '',
    component: IsmailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IsmailPageRoutingModule {}
