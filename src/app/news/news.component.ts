import { Component, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NewsService} from './news.service';
import {ArchivedService} from '../archived/archived.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {
  public date: NgbDateStruct;

  constructor(
    public newsService: NewsService,
    private _archivedService: ArchivedService
  ) { }

  archive(index: number) {
    this._archivedService.archive(this.newsService.news[index]);
    this.newsService.news.splice(index, 1);
  }

  ngOnInit() {
  }

}
