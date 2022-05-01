import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexCustumersComponent } from './index/index.component';
import { ViewCustumersComponent } from './view/view.component';
import { CreateCustumersComponent } from './create/create.component';
import { EditCustumersComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'custumers', redirectTo: 'custumers/index', pathMatch: 'full' },
  { path: 'custumers/index', component: IndexCustumersComponent },
  { path: 'custumers/:custumerId/view', component: ViewCustumersComponent },
  { path: 'custumers/create', component: CreateCustumersComponent },
  { path: 'custumers/:custumerId/edit', component: EditCustumersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustumersRoutingModule { }
