import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }


  name: string = '';
  email: string = '';
  password: string = '';
  

  signup() {

    this.authService.signup({
      name: this.name,
      email: this.email,
      password: this.password,
    });
  }

}
