import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { MenuComponent } from './core/menu/menu.component';
import { AboutComponent } from './core/about/about.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
// import { Product } from './service/product.service';
// import { ProductList } from './feature/product/product-list/product-list.component';
//import { ProductListComponent } from './feature/product/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    AboutComponent,
    VendorListComponent,
    // Product.Service.TsComponent,
    // Product.ServiceComponent,
    // ProductList.Component.TsComponent,
  //  ProductListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
   // VendorService
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
