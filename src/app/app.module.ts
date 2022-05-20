import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontComponent } from './front/front.component';
import { HomeComponent } from './home/home.component';
import { ExecomModule } from './execom/execom.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { EventsComponent } from './events/events.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { Events21Component } from './events21/events21.component';
import { Events20Component } from './events20/events20.component';
import { Events19Component } from './events19/events19.component';


const firebaseConfig = {
  apiKey: "AIzaSyCmhP0FntXHWiTsXizhBW1P0U1luayLTgM",
  authDomain: "ieee-ias.firebaseapp.com",
  databaseURL: "https://ieee-ias-default-rtdb.firebaseio.com",
  projectId: "ieee-ias",
  storageBucket: "ieee-ias.appspot.com",
  messagingSenderId: "905847841745",
  appId: "1:905847841745:web:07d5f072b8f046ee8f76f0",
  measurementId: "G-06MKV5TWPT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FrontComponent,
    HomeComponent,
    LoginComponent,
    EventsComponent,
    EventFormComponent,
    EventDetailsComponent,
    Events21Component,
    Events20Component,
    Events19Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ExecomModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
