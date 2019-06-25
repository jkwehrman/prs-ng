import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { MenuComponent } from './core/menu/menu.component';
import { AboutComponent } from './core/about/about.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';

import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { PRListComponent } from './feature/pr/pr-list/pr-list.component';
import { PrEditComponent } from './feature/pr/pr-edit/pr-edit.component';
import { PrDetailComponent } from './feature/pr/pr-detail/pr-detail.component';
import { PrCreateComponent } from './feature/pr/pr-create/pr-create.component';
import { SortPipe } from './pipe/sort.pipe';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { PrRequestLinesComponent } from './feature/pr/pr-request-lines/pr-request-lines.component';
import { PrRequestReviewComponent } from './feature/pr/pr-request-review/pr-request-review.component';
import { PrRequestApproveComponent } from './feature/pr/pr-request-approve/pr-request-approve.component';
import { PrliEditComponent } from './feature/prli/prli-edit/prli-edit.component';
import { PrliCreateComponent } from './feature/prli/prli-create/prli-create.component';
import { PrliDeleteComponent } from './feature/prli/prli-delete/prli-delete.component';
// import { PrliComponent } from './model/prli.class';
//import { PrComponent } from './model/pr/pr.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    AboutComponent,
    SortPipe,
    UserCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorListComponent,
    VendorDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductListComponent,

    ProductDetailComponent,

    PRListComponent,

    PrEditComponent,

    PrDetailComponent,

    PrCreateComponent,

    UserLoginComponent,

    PrRequestLinesComponent,

    PrRequestReviewComponent,

    PrRequestApproveComponent,

    PrliEditComponent,

    PrliCreateComponent,

    PrliCreateComponent,

    PrliEditComponent,

    PrliDeleteComponent


    //PrComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }