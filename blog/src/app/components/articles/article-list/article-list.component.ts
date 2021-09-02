import { Component, OnInit } from '@angular/core';
import { ARTICLE } from '../../../interfaces/article.interface';
import { ArticlesService } from '../../../services/articles.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {
  constructor(private articlesService: ArticlesService ) {}

  get articles() {
    return this.articlesService.articles;
  }

  ngOnInit(): void {
    this.articlesService.fetchArticles()
  }
}
