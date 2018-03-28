import { Component, OnInit } from '@angular/core';
import {New} from './new.model';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: New[] = [];

  constructor() { }

  ngOnInit() {
  }

}
