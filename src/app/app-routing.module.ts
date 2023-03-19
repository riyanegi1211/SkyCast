import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CalendarComponent } from './calendar/calendar.component';
const routes: Routes = [
  {path:"",component:ContactUsComponent},
  {path:"",component: CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
