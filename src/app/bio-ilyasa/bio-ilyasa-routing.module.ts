import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioIlyasaPage } from './bio-ilyasa.page';

const routes: Routes = [
  {
    path: '',
    component: BioIlyasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioIlyasaPageRoutingModule {}
