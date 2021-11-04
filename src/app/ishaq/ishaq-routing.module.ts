import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IshaqPage } from './ishaq.page';

const routes: Routes = [
  {
    path: '',
    component: IshaqPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IshaqPageRoutingModule {}
