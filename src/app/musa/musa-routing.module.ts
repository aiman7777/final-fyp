import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusaPage } from './musa.page';

const routes: Routes = [
  {
    path: '',
    component: MusaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MusaPageRoutingModule {}
