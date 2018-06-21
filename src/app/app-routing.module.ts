import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ShowPersonComponent } from './show-person/show-person.component';
import { Default404Component } from './default404/default404.component';
import { GuardianGuard } from './guardian/guardian.guard';

const appRoutes: Routes = [
    {path:'', component:ListPeopleComponent},
    {path:'person/:id', component:ShowPersonComponent},
    {path:'**', component:Default404Component}
  ]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing : true } )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
