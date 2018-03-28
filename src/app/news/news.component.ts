import { Component, OnInit } from '@angular/core';
import {New} from './new.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NewsService} from './news.service';
import {ArchivedService} from '../archived/archived.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: New[] = [];

  public date: Date;
  setDate(value: NgbDateStruct) {
    const date = new Date();
    date.setDate(value.day);
    date.setMonth(value.month - 1);
    date.setFullYear(value.year);

    this.date = date;
  }

  constructor(
    private _newsService: NewsService,
    public _archivedService: ArchivedService
  ) { }

  archive(item: New) {
    this._archivedService.achive(item);
  }

  ngOnInit() {
    this._newsService.news
      .subscribe(data => this.news = data);
  }

}
