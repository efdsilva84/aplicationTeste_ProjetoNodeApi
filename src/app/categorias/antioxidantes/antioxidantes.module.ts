import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AntioxidantesPageRoutingModule } from './antioxidantes-routing.module';

import { AntioxidantesPage } from './antioxidantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AntioxidantesPageRoutingModule
  ],
  declarations: [AntioxidantesPage]
})
export class AntioxidantesPageModule {}
