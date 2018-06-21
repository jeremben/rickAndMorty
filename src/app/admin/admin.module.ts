import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAdminComponent } from './info-admin/info-admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [InfoAdminComponent]
})
export class AdminModule { }
