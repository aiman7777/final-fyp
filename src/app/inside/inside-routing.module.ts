import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { insidePage } from './inside.page';

const routes: Routes = [
  {
    path: '',
    component: insidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsidePageRoutingModule {}
