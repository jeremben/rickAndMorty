import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ShowPersonComponent } from './show-person/show-person.component';
import { Default404Component } from './default404/default404.component';
import { ChuckJokeComponent } from './chuck-joke/chuck-joke.component';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {DialogModule} from 'primeng/dialog';
import {GrowlModule} from 'primeng/growl';
import {TreeTableModule} from 'primeng/treetable';

@NgModule({
  declarations: [
    AppComponent,
    ListPeopleComponent,
    ShowPersonComponent,
    Default404Component,
    ChuckJokeComponent
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
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    DialogModule,
    GrowlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
