import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-article-post',
  templateUrl: './article-post.component.html',
  styleUrls: ['./article-post.component.css']
})
export class ArticlePostComponent implements OnInit {
  @Input() arIt: any;
  @Input() arId: any;

  constructor() { }

  ngOnInit(): void {
  }

}
