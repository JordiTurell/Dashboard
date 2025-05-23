import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  localstoragetoken = environment.token
  
  constructor() { }

  isAuthenticated(token:string):Observable<boolean> {
    return of(true)
  }

  setToken(token: string): boolean {
    localStorage.setItem(this.localstoragetoken, token)
    return true
  }

  removeToken(): void {
    localStorage.removeItem(this.localstoragetoken);
  }

  getToken(): string | null {
    return localStorage.getItem(this.localstoragetoken);
  }
}
