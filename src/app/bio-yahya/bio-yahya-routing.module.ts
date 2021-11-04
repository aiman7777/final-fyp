import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BioYahyaPage } from './bio-yahya.page';

const routes: Routes = [
  {
    path: '',
    component: BioYahyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BioYahyaPageRoutingModule {}
