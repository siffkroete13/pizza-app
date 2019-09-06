import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InsertPage } from './insert.page';
import { InsertFormComponent } from '../insert-form/insert-form.component';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path: '',
    component: InsertPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InsertPage, InsertFormComponent, ReactiveFormComponent]
})
export class InsertPageModule {}
