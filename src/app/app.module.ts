import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VegComponent } from './veg/veg.component';
import { NonvegComponent } from './nonveg/nonveg.component';
import { ChineseComponent } from './chinese/chinese.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindishComponent } from './admindish/admindish.component';
import { AdminuserComponent } from './adminuser/adminuser.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
   
    NopageFoundComponent,
    LoginComponent,
    RegisterComponent,
    VegComponent,
    NonvegComponent,
    ChineseComponent,
    CartComponent,
    HeaderComponent,
    ProfileComponent,
    OrdersComponent,
    AdminComponent,
    AdmindishComponent,
    AdminuserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
