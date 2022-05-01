import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'pets', redirectTo: 'pets/index', pathMatch: 'full' },
  { path: 'pets/index', component: IndexComponent },
  { path: 'pet/:petId/view', component: ViewComponent },
  { path: 'pet/create', component: CreateComponent },
  { path: 'pet/:petId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
