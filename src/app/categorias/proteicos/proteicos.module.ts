import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProteicosPageRoutingModule } from './proteicos-routing.module';

import { ProteicosPage } from './proteicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProteicosPageRoutingModule
  ],
  declarations: [ProteicosPage]
})
export class ProteicosPageModule {}
