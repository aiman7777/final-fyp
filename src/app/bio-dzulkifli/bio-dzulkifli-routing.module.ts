import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioDzulkifliPage } from './bio-dzulkifli.page';

const routes: Routes = [
  {
    path: '',
    component: BioDzulkifliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioDzulkifliPageRoutingModule {}
