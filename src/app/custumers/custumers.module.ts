import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustumersRoutingModule } from './custumers-routing.module';
import { IndexCustumersComponent } from './index/index.component';
import { ViewCustumersComponent } from './view/view.component';
import { CreateCustumersComponent } from './create/create.component';
import { EditCustumersComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    IndexCustumersComponent,
    ViewCustumersComponent,
    CreateCustumersComponent,
    EditCustumersComponent
  ],
  imports: [
    CommonModule,
    CustumersRoutingModule
  ]
})
export class CustumersModule { }
