import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdrisPage } from './idris.page';

const routes: Routes = [
  {
    path: '',
    component: IdrisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdrisPageRoutingModule {}
