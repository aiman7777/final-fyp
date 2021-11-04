import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YaqubPage } from './yaqub.page';

const routes: Routes = [
  {
    path: '',
    component: YaqubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YaqubPageRoutingModule {}
