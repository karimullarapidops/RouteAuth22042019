import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [DashboardComponent, SettingsComponent, ProductsComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class HomeModule { }
