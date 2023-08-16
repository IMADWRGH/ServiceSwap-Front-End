import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SearchComponent } from './component/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ServiceListCategoryComponent } from './lists_services/service-list-category/service-list-category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { ListCategoryComponent } from './lists_services/list-category/list-category.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { SellerComponent } from './seller/seller.component';
import { CustomerComponent } from './customer/customer.component';
import { AuthInterceptor } from './services/authconfig.interceptor';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { AddServiceComponent } from './seller/add-service/add-service.component';
import { PanelComponent } from './customer/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    SearchComponent,
    NavbarComponent,
    ServiceListCategoryComponent,
    SingupComponent,
    LoginComponent,
    ListCategoryComponent,
    AdminComponent,
    SellerComponent,
    CustomerComponent,
    SidebarComponent,
    ProfilComponent,
    AddServiceComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
