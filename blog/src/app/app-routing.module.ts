import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { SigninComponent } from './views/auth/signin/signin.component';
import { SingupComponent } from './views/auth/singup/singup.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { ArticleFormComponent } from './views/article-form/article-form.component';
import { IsLoggedInGuard } from './guards/is-logged-in.guard';
import { IsNotLoggedInGuard } from './guards/is-not-logged-in.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: 'signin',
    component: SigninComponent,
    canActivate: [IsNotLoggedInGuard]
  },
  {
    path: 'signup',
    component: SingupComponent,
    canActivate: [IsNotLoggedInGuard]
  },
  {
    path: 'articleForm/:articleId',
    component: ArticleFormComponent,
    canActivate: [IsLoggedInGuard],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
