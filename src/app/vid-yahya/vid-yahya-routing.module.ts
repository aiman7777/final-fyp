import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidYahyaPage } from './vid-yahya.page';

const routes: Routes = [
  {
    path: '',
    component: VidYahyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidYahyaPageRoutingModule {}
