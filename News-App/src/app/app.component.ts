import { Component } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JSF News';
  private articles:Array<any>;
  private sources:Array<any>;
  
  constructor(private service:NewsService){ }

  ngOnInit() {
    this.service.getArticle().subscribe(data => this.articles = data['articles']);
    this.service.getSource().subscribe(data => this.sources = data['sources']);
  }

  searchArticle(source:string) {
    this.service.getArticleById(source).subscribe(data => this.articles = data['articles']);
  }
}
