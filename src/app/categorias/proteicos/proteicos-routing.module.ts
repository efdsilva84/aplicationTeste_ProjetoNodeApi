import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProteicosPage } from './proteicos.page';

const routes: Routes = [
  {
    path: '',
    component: ProteicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProteicosPageRoutingModule {}
