import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {
  constructor(private auth: AuthService, private router: Router) { }

  // Login and Logout function with no return info
  login() {
    //Not being used yet
    //this.auth.loginWithRedirect();
    this.auth.loginWithPopup();
  }

  async logout(): Promise<void> {
    // @ts-ignore
    //this.auth.logout({ returnTo: window.location.origin });
    this.auth.logout(); 
    this.router.navigate(['/home']); 
  }


}
