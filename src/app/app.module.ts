import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexCustumersComponent } from './custumers/index/index.component';
import { ViewCustumersComponent } from './custumers/view/view.component';
import { CreateCustumersComponent } from './custumers/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexCustumersComponent,
    ViewCustumersComponent,
    CreateCustumersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
