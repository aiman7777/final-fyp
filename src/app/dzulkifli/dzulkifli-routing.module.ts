import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DzulkifliPage } from './dzulkifli.page';

const routes: Routes = [
  {
    path: '',
    component: DzulkifliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DzulkifliPageRoutingModule {}
