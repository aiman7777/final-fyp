import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidDzulkifliPage } from './vid-dzulkifli.page';

const routes: Routes = [
  {
    path: '',
    component: VidDzulkifliPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidDzulkifliPageRoutingModule {}
