import { Injectable } from '@angular/core';
import { City, Profile } from '@lib/types';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  login(username: string, password: string): Observable<{ token: string, profile: Profile }> {
    if (username == 'admin' && password == 'admin') return of({ token: 'token', profile: { id: 1, login: 'admin', name: 'name', last_name: 'last name', birth_date: new Date(), city: City.Moscow } })
    return throwError('wrong username or password')
  }
}
