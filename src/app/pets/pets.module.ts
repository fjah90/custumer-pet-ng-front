import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { IndexPetsComponent } from './index/index.component';
import { ViewPetsComponent } from './view/view.component';
import { CreatePetsComponent } from './create/create.component';
import { EditPetsComponent } from './edit/edit.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexPetsComponent,
    ViewPetsComponent,
    CreatePetsComponent,
    EditPetsComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PetsModule { }
