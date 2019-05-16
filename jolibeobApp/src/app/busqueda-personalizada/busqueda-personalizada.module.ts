import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BusquedaPersonalizadaPage } from './busqueda-personalizada.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaPersonalizadaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BusquedaPersonalizadaPage]
})
export class BusquedaPersonalizadaPageModule {}
