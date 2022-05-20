import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventsComponent } from './events/events.component';
import { Events19Component } from './events19/events19.component';
import { Events20Component } from './events20/events20.component';
import { Events21Component } from './events21/events21.component';
import { Execom15Component } from './execom/execom15/execom15.component';
import { Execom16Component } from './execom/execom16/execom16.component';
import { Execom17Component } from './execom/execom17/execom17.component';
import { Execom18Component } from './execom/execom18/execom18.component';
import { Execom19Component } from './execom/execom19/execom19.component';
import { Execom20Component } from './execom/execom20/execom20.component';
import { Execom21Component } from './execom/execom21/execom21.component';
import { Execom22Component } from './execom/execom22/execom22.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'events22/:year', component:EventsComponent},
  {path:'events21/:year', component:Events21Component},
  {path:'events20/:year', component:Events20Component},
  {path:'events19/:year', component:Events19Component},
  {path:'execom22', component:Execom22Component},
  {path:'execom21', component:Execom21Component},
  {path:'execom20', component:Execom20Component},
  {path:'execom19', component:Execom19Component},
  {path:'execom18', component:Execom18Component},
  {path:'execom17', component:Execom17Component},
  {path:'execom16', component:Execom16Component},
  {path:'execom15', component:Execom15Component},
  {path:'login', component:LoginComponent},
  {path:'eventForm', component:EventFormComponent},
  {path:'events/:year/:id', component:EventDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
