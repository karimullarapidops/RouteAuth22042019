import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';

// const routes: Routes = [
//   {path: '', component: HomeComponent},
//   {path: 'index', component: IndexComponent},
//   {path: '**', component: NoPageComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
