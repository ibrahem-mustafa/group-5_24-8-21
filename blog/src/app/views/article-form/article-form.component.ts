import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../../services/articles.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent implements OnInit {
  editMode: boolean = false;
  articleId: string = '';
  title: string = '';
  content: string = '';

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params.articleId;

    if (id != 'new') {
      this.editMode = true;
      this.articleId = id;

      const article = this.articlesService.getArticleById(id)
      if (article) {
        this.title = article.title;
        this.content = article.content;
      } else {
        this.router.navigateByUrl('/notFound')
      }
    }
  }

  submit() {
    if (this.editMode) {
      this.articlesService.updateArticle({
        id: this.articleId,
        title: this.title,
        content: this.content
      })
    } else {
      this.articlesService.createArticle({
        title: this.title,
        content: this.content,
      });
    }
  }
}
