import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AntioxidantesPage } from './antioxidantes.page';

const routes: Routes = [
  {
    path: '',
    component: AntioxidantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AntioxidantesPageRoutingModule {}
