import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  
  setUser(
    data: {
      token: string,
      user: {
        id: string,
        name: string,
        email: string,
        createdAt: string
      }
    }
  ) {
    window.localStorage.setItem('token', `Bearer ${data.token}`);
    window.localStorage.setItem('user', JSON.stringify(data.user));
  }
  
  getUser() {
    const data = window.localStorage.getItem('user');
    if (data == null) return null;
    return JSON.parse(data);
  }
  

  getToken() {
    return window.localStorage.getItem('token')!;
  }
  

  // true
  // !true => false
  // !false => true
  // !!true => !false => true
  userLoggedIn(): boolean {
    // return this.getUser() != null;
    return !!this.getUser();
  }
  
  clear() {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
  }

}
