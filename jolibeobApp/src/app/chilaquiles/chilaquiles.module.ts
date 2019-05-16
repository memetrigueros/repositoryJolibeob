import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ChilaquilesPage } from './chilaquiles.page';

const routes: Routes = [
  {
    path: '',
    component: ChilaquilesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChilaquilesPage]
})
export class ChilaquilesPageModule {}
