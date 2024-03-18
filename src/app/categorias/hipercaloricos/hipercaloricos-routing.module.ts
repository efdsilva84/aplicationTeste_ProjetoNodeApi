import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HipercaloricosPage } from './hipercaloricos.page';

const routes: Routes = [
  {
    path: '',
    component: HipercaloricosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HipercaloricosPageRoutingModule {}
