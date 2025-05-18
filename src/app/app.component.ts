import {Component} from '@angular/core';
import {ArticleFormComponent} from './components/article-form/article-form.component';
import {ArticleListComponent} from './components/article-list/article-list.component';

@Component({
  selector: 'app-root',
  imports: [ArticleFormComponent, ArticleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ssr';
}
