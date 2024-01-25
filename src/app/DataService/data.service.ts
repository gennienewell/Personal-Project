import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = "https://localhost:7290/create"; // Replace with your API base URL

  constructor(private http: HttpClient) { }

  saveUserData(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
