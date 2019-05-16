import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PantallaPrimeraVezPage } from './pantalla-primera-vez.page';

const routes: Routes = [
  {
    path: '',
    component: PantallaPrimeraVezPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PantallaPrimeraVezPage]
})
export class PantallaPrimeraVezPageModule {}
