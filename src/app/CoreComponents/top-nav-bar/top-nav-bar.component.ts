import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent {
  //Processes logic here then passes to the HTML file.
  //constructor(private auth: AuthService) { }
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
    this.auth.logout(); // Call the logout method from your authentication service
    this.router.navigate(['/home']); // Navigate to the home component after logout
  }



  // The "HTML is what gets rendered to the screen with component is used.-->"
}
