import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HipercaloricosPageRoutingModule } from './hipercaloricos-routing.module';

import { HipercaloricosPage } from './hipercaloricos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HipercaloricosPageRoutingModule
  ],
  declarations: [HipercaloricosPage]
})
export class HipercaloricosPageModule {}
