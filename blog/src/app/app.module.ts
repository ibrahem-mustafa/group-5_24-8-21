import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HomeComponent } from './views/home/home.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SingupComponent } from './views/auth/singup/singup.component';
import { DefaultBarComponent } from './components/bars/default-bar/default-bar.component';
import { NotFoundComponent } from './views/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoFormComponent,
    HomeComponent,
    SigninComponent,
    SingupComponent,
    DefaultBarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
