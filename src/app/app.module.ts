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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
