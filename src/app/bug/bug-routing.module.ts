import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BugPage } from './bug.page';

const routes: Routes = [
  {
    path: '',
    component: BugPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BugPageRoutingModule {}
