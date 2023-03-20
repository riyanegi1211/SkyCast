import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path:"",component: LoginComponent},
  {path:"Home",component: HomeComponent},
  {path:"Login",component: LoginComponent},
  {path:"ContactUs",component: ContactUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
