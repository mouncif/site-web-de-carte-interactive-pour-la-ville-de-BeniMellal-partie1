import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { MescoursComponent } from './modules/cours/mescours/mescours.component';
import { DetailcourComponent } from './modules/consult/detailcour/detailcour.component';
import { LoginComponent } from './modules/auth/login/login/login.component';
import { CoursComponent } from './modules/components/cours/cours.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {path: '', component: DashboardComponent}, 
      {path: 'posts',component: PostsComponent},
      {path : 'mescours', component : MescoursComponent},
      {path : 'detail' ,component : DetailcourComponent},
    ]
  },
  {path : 'login' ,component : LoginComponent},
  {path : 'add' ,component : CoursComponent},
  {path : 'register' ,component : RegisterComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
