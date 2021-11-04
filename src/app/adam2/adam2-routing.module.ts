import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Adam2Page } from './adam2.page';

const routes: Routes = [
  {
    path: '',
    component: Adam2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Adam2PageRoutingModule {}
