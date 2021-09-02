import { Injectable } from '@angular/core';
import { ARTICLE } from '../interfaces/article.interface';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  constructor(private http:HttpClient, private userService: UserService, private router: Router) {}

  articles: ARTICLE[] = [
  ];

  private _baseUrl = 'http://localhost:3000/article'

  private get headers() {
    return {
      headers: {
        Authorization: this.userService.getToken(),
      },
    };
  }

  fetchArticles() {
    this.http
      .get<{
        articles: ARTICLE[];
      }>(this._baseUrl, this.headers)
      .subscribe(
        (data) => (this.articles = data.articles),
        (err) => console.log(err)
      );
  }


  
  createArticle(data: { title: string, content: string }) {
    this.http.post<{
      article: ARTICLE
    }>(this._baseUrl, data, this.headers).subscribe(
      data => {
        this.articles.push(data.article);
        this.router.navigateByUrl('/')
      },
      err => console.log(err)
    );
  }

  updateArticle(data: {
    id: string,
    title: string,
    content: string
  }) {
    this.http.put(`${this._baseUrl}/${data.id}`, data, this.headers).subscribe(
      data => {
        this.router.navigateByUrl('/')
      },
      err => console.log(err)
    )
  }

  deleteArticle(id: string) {
    this.http.delete(`${this._baseUrl}/${id}`, this.headers).subscribe(
      data => {
        const articleIndex = this.articles.findIndex(art => art._id == id)

        if (articleIndex > -1) {
          this.articles.splice(articleIndex, 1)
        }
      },
      err => console.log(err)
    )
  }

  getArticleById(id: string) {
    return this.articles.find(art => art._id == id);
  }
}
