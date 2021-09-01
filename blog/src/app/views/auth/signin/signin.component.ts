import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  email: string = '';
  password: string = '';

  signin() {
    this.authService.signin({ email: this.email, password: this.password });
  }
}
