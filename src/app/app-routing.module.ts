import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NopageFoundComponent } from './nopage-found/nopage-found.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { ChineseComponent } from './chinese/chinese.component';
import { AuthguardService } from './authguard.service';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: '', redirectTo: "/home", pathMatch:"full"},
  
  {path: 'home', component: HomeComponent},
  
  {path: 'about', component: AboutComponent,canActivate:[AuthguardService]},
  
  
  
  {path: 'contact', component: ContactComponent,canActivate:[AuthguardService]},

  

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'veg', component: VegComponent,canActivate:[AuthguardService]},
  {path: 'veg/:name', component: VegComponent,canActivate:[AuthguardService]},
  {path: 'nonveg', component: NonvegComponent,canActivate:[AuthguardService]},
  {path: 'nonveg/:name', component: NonvegComponent,canActivate:[AuthguardService]},
  {path: 'chinese', component: ChineseComponent,canActivate:[AuthguardService]},
  {path: 'chinese/:name', component: ChineseComponent,canActivate:[AuthguardService]},
  {path: 'cart', component: CartComponent,canActivate:[AuthguardService]},
  {path: 'profile', component: ProfileComponent,canActivate:[AuthguardService]},
  {path: 'admin', component: AdminComponent,canActivate:[AuthguardService]},

  
  
  {path: '**', component: NopageFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
