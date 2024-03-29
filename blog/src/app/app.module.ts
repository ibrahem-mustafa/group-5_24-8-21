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
import { ArticleListComponent } from './components/articles/article-list/article-list.component';
import { ArticleListItemComponent } from './components/articles/article-list-item/article-list-item.component';
import { ActionsBarComponent } from './components/bars/actions-bar/actions-bar.component';
import { ArticleFormComponent } from './views/article-form/article-form.component';

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
    ArticleListComponent,
    ArticleListItemComponent,
    ActionsBarComponent,
    ArticleFormComponent,
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
