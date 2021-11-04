import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioYusufPage } from './bio-yusuf.page';

const routes: Routes = [
  {
    path: '',
    component: BioYusufPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioYusufPageRoutingModule {}
