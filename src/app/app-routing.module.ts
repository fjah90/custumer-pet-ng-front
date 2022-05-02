import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexCustumersComponent } from './custumers/index/index.component';

const routes: Routes = [
  { path: '', component: IndexCustumersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
