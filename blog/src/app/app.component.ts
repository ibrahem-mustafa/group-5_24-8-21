import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  // PART 1

  // title = 'Master Blog';

  // isHomePage: boolean = false;

  // defaultEmail = 'ahmed@gmail.com';

  // pageTitle() {
  //   return this.isHomePage ? 'Home Page' : 'About Page';
  // }

  // isHeader = true;

  // // headerClasses = this.isHeader ? 'header bold italic' : 'subHeader bold italic';

  // headerClasses() {
  //   return {
  //     header: this.isHeader,
  //     bold: this.isHeader,
  //     uppercase: !this.isHeader,
  //   };
  // }

  // // singStyleBinding = this.isHeader ? '4rem' : '2rem';
  // // multipleStyleBinding = {
  // //   fontSize: this.isHeader ? '4rem' : '2rem',
  // //   fontWeight: this.isHeader ? 'bold' : '200',
  // // };

  // singStyleBinding() {
  //   return this.isHeader ? '4rem' : '2rem';
  // }

  // multipleStyleBinding() {
  //   return {
  //     fontSize: this.isHeader ? '4rem' : '2rem',
  //     fontWeight: this.isHeader ? 'bold' : '200',
  //   };
  // }

  // toggleHeaderState() {
  //   this.isHeader = !this.isHeader;
  // }

  // PART 2
  email = 'ahmed@gmail.com'
  

  sendEmail(value: string) {
    this.email = value;
  }


  update() {
    this.email = 'Updated@gmail.com'
  }


  userLoggedIn = true;

  updateUserState() {
    this.userLoggedIn = !this.userLoggedIn;
  }

  // sendEmail() {
  //   const input = document.getElementById('input1') as HTMLInputElement;
  //   const value = input.value;
  //   this.email = value;
  // }

  // admin | publisher | client
  
  userType: string = 'asdgdsfg';

  todos: string[] = [
    'todo one',
    'todo 2',
    'todo 3',
    'todo 4',
    'todo 5',

  ]

  user = {
    name: 'ahmed',
    age: 30
  }

  now = new Date();

}
