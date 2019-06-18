import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
//import { ProductListComponent } from './feature/product/product-list/product-list.component';

import { AboutComponent } from './core/about/about.component';

const routes: Routes = [
  {path:'', redirectTo: '/user/list', pathMatch: 'full' },

  {path:'user/list', component: UserListComponent},
  {path:'vendor/list', component: VendorListComponent},

  {path:'about', component: AboutComponent},
  
{path:'**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
