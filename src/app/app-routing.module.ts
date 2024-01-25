import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

import { ProfileComponent } from './MainContentComponents/profile/profile.component';
import { ConsultantsComponent } from './MainContentComponents/consultants/consultants.component';
import { ConferenceRoomComponent } from './MainContentComponents/conference-room/conference-room.component';
import { SettingsComponent } from './MainContentComponents/settings/settings.component';
import { PageNotFoundComponent } from './MainContentComponents/page-not-found/page-not-found.component';


// List of type "Routes"
const routes: Routes = [
  // Add Routes here
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'consultants', component: ConsultantsComponent },
  { path: 'conferenceRoom', component: ConferenceRoomComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
