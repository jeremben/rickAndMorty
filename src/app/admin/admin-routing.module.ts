import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from '../guardian/guardian.guard'

import { InfoAdminComponent } from './info-admin/info-admin.component'

const appRoutes: Routes = [
    {path:'admin', component:InfoAdminComponent, canActivate: [GuardianGuard]}
  ]

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
