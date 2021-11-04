import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuhammadPage } from './muhammad.page';

const routes: Routes = [
  {
    path: '',
    component: MuhammadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuhammadPageRoutingModule {}
