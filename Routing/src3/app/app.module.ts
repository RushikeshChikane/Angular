import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectComponent } from './project/project.component'; 
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';

const routes: Routes=[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about-us', component:  AboutUsComponent },
      { path: 'project', component: ProjectComponent }
    ]
  },

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,
  ],
  providers: [JwtHelperService,{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
  bootstrap: [AppComponent]
})
export class AppModule { }