import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private sourceUrl:string;
  private articleUrl:string;
  private searchUrl:string;
  private apiKey:string;

  constructor(private http:HttpClient) {
    this.sourceUrl='https://newsapi.org/v2/sources?language=en&apiKey=';
    this.articleUrl='https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=';
    this.searchUrl='https://newsapi.org/v2/top-headlines?sources=';
    this.apiKey='a6228d7c21634925b182ba1b07dcebef';  
   }

   getSource() {
    return this.http.get(this.sourceUrl+this.apiKey);
   }

   getArticle() {
    return this.http.get(this.articleUrl+this.apiKey);
   }

   getArticleById(source:string) {
    return this.http.get(this.searchUrl+source+'&apiKey='+this.apiKey);
   }

}
