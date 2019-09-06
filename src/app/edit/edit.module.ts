import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPage } from './edit.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AccordionListComponent } from '../accordion-list/accordion-list.component';

const routes: Routes = [
  {
    path: '',
    component: EditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [ HttpClientModule ],
  declarations: [EditPage, AccordionListComponent]
})
export class EditPageModule {}
