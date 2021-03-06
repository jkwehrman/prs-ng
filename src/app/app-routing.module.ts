import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './feature/user/user-login/user-login.component';

import { UserListComponent } from './feature/user/user-list/user-list.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { PRListComponent } from './feature/pr/pr-list/pr-list.component';

import { AboutComponent } from './core/about/about.component';

import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { PrCreateComponent } from './feature/pr/pr-create/pr-create.component';

import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { PrEditComponent } from './feature/pr/pr-edit/pr-edit.component';

import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { PrDetailComponent } from './feature/pr/pr-detail/pr-detail.component';

// import { PrApproveComponent } from './feature/pr/pr-request-approve/pr-request-approve.component';
import { PrRequestApproveComponent } from './feature/pr/pr-request-approve/pr-request-approve.component';
// import { PrRequestReviewComponent } from './feature/pr/pr-request-review/pr-request-review.component';
import { PrRequestReviewComponent } from './feature/pr/pr-request-review/pr-request-review.component';

import { PrRequestLinesComponent } from './feature/pr/pr-request-lines/pr-request-lines.component';
import { PrliCreateComponent } from './feature/prli/prli-create/prli-create.component';
import { PrliEditComponent } from './feature/prli/prli-edit/prli-edit.component';
import { PrliDeleteComponent } from './feature/prli/prli-delete/prli-delete.component';

// import { PRListComponent } from './feature/pr/pr-list/pr-list.component';
// import { PrRequestReviewComponent } from './feature/pr/pr-request-review/pr-request-review.component';


const routes: Routes = [
  // {path:'', redirectTo: '/user/list', pathMatch: 'full' },
  // {path:'', redirectTo: '/user/list', pathMatch: 'full' },

  {path:'user/list', component: UserListComponent},
  {path:'user/create', component: UserCreateComponent},
  {path:'user/edit/:id', component: UserEditComponent},
  {path:'user/detail/:id', component: UserDetailComponent},
  {path:'user/remove/:id', component: UserDetailComponent},
  {path:'user/login', component: UserLoginComponent},


  {path:'vendor/list', component: VendorListComponent},
  {path:'vendor/create', component: VendorCreateComponent},
  {path:'vendor/edit/:id', component: VendorEditComponent},
  {path:'vendor/detail/:id', component: VendorDetailComponent},
  {path:'vendor/remove/:id', component: VendorDetailComponent},

  {path:'product/list', component: ProductListComponent},
  {path:'product/create', component: ProductCreateComponent},
  {path:'product/edit/:id', component: ProductEditComponent},
  {path:'product/detail/:id', component: ProductDetailComponent},
  {path:'product/remove/:id', component: ProductDetailComponent},

  {path:'pr/list', component: PRListComponent},
  {path:'pr/create', component: PrCreateComponent},
  {path:'pr/edit/:id', component: PrEditComponent},
  {path:'pr/detail/:id', component: PrDetailComponent},
  {path:'pr/remove/:id', component: PrDetailComponent},
  {path:'pr/approve/:id', component: PrRequestApproveComponent},
  {path:'pr/review', component: PrRequestReviewComponent},
  // {path:'pr/review/:id', component: PrRequestReviewComponent},

  {path:'pr/lines/:id', component: PrRequestLinesComponent},

  {path:'prli/create/:id', component: PrliCreateComponent},
  {path:'prli/edit/:id', component: PrliEditComponent},
  {path:'prli/delete/:id', component: PrliDeleteComponent},






  // {path:'prli/lines/:id', component: PrliCreateComponent},
  // {path:'prli/edit/:id', component: PrliEditComponent},


  
  
  {path:'about', component: AboutComponent},
  
  {path:'**', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

