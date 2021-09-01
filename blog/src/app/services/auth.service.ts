import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
  ) { }

  signup(data: { name: string; email: string; password: string }) {
    this.http.post('http://localhost:3000/auth/signup', data).subscribe(
      (data) => {
        this.router.navigateByUrl('/signin')
      },
      (err) => console.log(err)
    );
  }

  signin(data: { email: string; password: string }) {
    this.http
      .post<{
        token: string;
        user: {
          id: string;
          name: string;
          email: string;
          createdAt: string;
        };
      }>('http://localhost:3000/auth/signin', data)
      .subscribe(
        (data) => {
          this.userService.setUser(data);
          this.router.navigateByUrl('/')
        },
        (err) => console.log(err)
      );
  }
}
