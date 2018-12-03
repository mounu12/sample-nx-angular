import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  // Getting JSON Data from json file
  login(username: string, password: string) {
    return of({
      name: 'Raju',
      email: 'raj.virtuali@gmail.com'
    });
  }
}
