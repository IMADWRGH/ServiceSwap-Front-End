import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServiceListCategoryComponent } from './lists_services/service-list-category/service-list-category.component';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';
import { ListCategoryComponent } from './lists_services/list-category/list-category.component';
import { BodyComponent } from './admin/body/body.component';


const routes: Routes = [
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'service', component: ServiceListCategoryComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'serviceType/:type', component: ListCategoryComponent },
  { path: 'nav', component: BodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
