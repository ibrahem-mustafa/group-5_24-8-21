import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-default-bar',
  templateUrl: './default-bar.component.html',
  styleUrls: ['./default-bar.component.css']
})
export class DefaultBarComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  

  get isLoggedIn(): boolean {
    return this.userService.userLoggedIn();
  }

  singout() {
    this.userService.clear();
    this.router.navigateByUrl('/signin')
  }

}
