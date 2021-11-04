import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Log2Page } from './log2.page';

const routes: Routes = [
  {
    path: '',
    component: Log2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Log2PageRoutingModule {}
