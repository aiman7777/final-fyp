import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YahyaPage } from './yahya.page';

const routes: Routes = [
  {
    path: '',
    component: YahyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YahyaPageRoutingModule {}
