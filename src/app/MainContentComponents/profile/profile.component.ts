import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DataService } from '../../DataService/data.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  // Define a variable to hold user information as object
  userData: any;
  userModel: UserModel;

  constructor(public auth: AuthService, private dataService: DataService) { }

  ngOnInit(): void {
    // Subscribe to the Auth0 user$ observable to get the user's information
    this.auth.user$.subscribe(
      (user) => {
        // Update user data
        this.userData = {
          UserId: user?.sub,
          UserName: user?.name,
          UserEmail: user?.email,
          UserGivenName: user?.given_name,
          UserFamilyName: user?.family_name,
          UserNickname: user?.nickname,
          UserPicture: user?.picture
        };

        // Call the service to save user data
        this.saveUserData();
      },
      (error) => {
        console.error('Error getting user data:', error);
      }
    );
  }

  saveUserData() {
    // Check if user data is available
    if (this.userData) {
      // Call the service to save user data
      this.dataService.saveUserData(this.userData).subscribe(
        (response) => {
          console.log('User data saved successfully:', response);
        },
        (error) => {
          console.error('Error saving user data:', error);
        }
      );
    }
  }
}
