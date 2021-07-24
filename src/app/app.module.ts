import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HotelOffersComponent } from './hotel-offers/hotel-offers.component';
import { CreateOfferComponent } from './create-offer/create-offer.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    HotelOffersComponent,
    CreateOfferComponent,
    HotelDetailsComponent,
    HotelEditComponent,
    ProfileComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
