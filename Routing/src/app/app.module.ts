import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { EmployeesModule } from './employees/employees.module'; 
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectComponent } from './project/project.component'; 
import { RoutingComponent} from './routing/routing.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

const routes: Routes=[
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login',component : LoginComponent},
  {path:'routing', component:RoutingComponent }
  // children: [
  //   // {path:'customer', component: CustomerlistComponent},
  //   // {path:'product', component: ProductComponent},
  //   // {path:'aboutus', component: AboutUsComponent},
  //   // {path:'home', component: HomeComponent},
  // ]

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RoutingComponent,
    AboutUsComponent,
    ProjectComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }