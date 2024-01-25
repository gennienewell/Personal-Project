import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = "https://localhost:8000/create"; 

  constructor(private http: HttpClient) { }

  saveUserData(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }
}
