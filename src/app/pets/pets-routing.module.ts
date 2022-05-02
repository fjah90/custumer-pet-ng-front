import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexPetsComponent } from './index/index.component';
import { ViewPetsComponent } from './view/view.component';
import { CreatePetsComponent } from './create/create.component';
import { EditPetsComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'pets', redirectTo: 'pets/index', pathMatch: 'full' },
  { path: 'pets/index', component: IndexPetsComponent },
  { path: 'pets/view/:_id', component: ViewPetsComponent },
  { path: 'pets/create', component: CreatePetsComponent },
  { path: 'pets/edit/:_id', component: EditPetsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
