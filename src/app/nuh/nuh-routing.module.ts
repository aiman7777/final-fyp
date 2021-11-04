import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuhPage } from './nuh.page';

const routes: Routes = [
  {
    path: '',
    component: NuhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuhPageRoutingModule {}
