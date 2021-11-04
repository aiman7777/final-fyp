import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlyasaPage } from './ilyasa.page';

const routes: Routes = [
  {
    path: '',
    component: IlyasaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlyasaPageRoutingModule {}
