import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// HTTP Module
import { HttpClientModule } from '@angular/common/http';

// Auth0.com Module
import { AuthModule } from '@auth0/auth0-angular';

//Router Main Module
import { RouterModule } from '@angular/router';

//Routes Module for routes in app
import { AppRoutingModule } from './app-routing.module';

// Core Compenents
import { TopNavBarComponent } from './CoreComponents/top-nav-bar/top-nav-bar.component';
import { LeftNavBarComponent } from './CoreComponents/left-nav-bar/left-nav-bar.component';

// Compenents
import { ProfileComponent } from './MainContentComponents/profile/profile.component';
import { ConsultantsComponent } from './MainContentComponents/consultants/consultants.component';
import { SettingsComponent } from './MainContentComponents/settings/settings.component';
import { ConferenceRoomComponent } from './MainContentComponents/conference-room/conference-room.component';
import { PageNotFoundComponent } from './MainContentComponents/page-not-found/page-not-found.component';
import { ConsultantWidgetComponent } from './Components/consultant-widget/consultant-widget.component';


@NgModule({
  // Components
  declarations: [
    AppComponent,
    TopNavBarComponent,
    LeftNavBarComponent,
    ProfileComponent,
    ConsultantsComponent,
    SettingsComponent,
    ConferenceRoomComponent,
    PageNotFoundComponent,
    ConsultantWidgetComponent
  ],
  // Modules
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: '',
      clientId: '',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
