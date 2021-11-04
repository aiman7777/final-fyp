import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioIlyasPage } from './bio-ilyas.page';

const routes: Routes = [
  {
    path: '',
    component: BioIlyasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioIlyasPageRoutingModule {}
