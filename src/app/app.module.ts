import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './modules/auth/login/login/login.component';
import { MescoursComponent } from './modules/cours/mescours/mescours.component';
import { DetailcourComponent } from './modules/consult/detailcour/detailcour.component';
import { FormsModule } from '@angular/forms';
import { CoursComponent } from './modules/components/cours/cours.component';
import { NavbarComponent } from './modules/components/navbar/navbar.component';
import { RegisterComponent } from './modules/auth/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MescoursComponent,
    DetailcourComponent,
    CoursComponent,
    NavbarComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
