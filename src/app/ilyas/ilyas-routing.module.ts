import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IlyasPage } from './ilyas.page';

const routes: Routes = [
  {
    path: '',
    component: IlyasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IlyasPageRoutingModule {}
