import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ShowPersonComponent } from './show-person/show-person.component';
import { Default404Component } from './default404/default404.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    ShowPersonComponent,
    Default404Component
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
