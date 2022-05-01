import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustumersRoutingModule } from './custumers-routing.module';
import { IndexCustumersComponent } from './index/index.component';
import { ViewCustumersComponent } from './view/view.component';
import { CreateCustumersComponent } from './create/create.component';
import { EditCustumersComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexCustumersComponent,
    ViewCustumersComponent,
    CreateCustumersComponent,
    EditCustumersComponent
  ],
  imports: [
    CommonModule,
    CustumersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustumersModule { }
