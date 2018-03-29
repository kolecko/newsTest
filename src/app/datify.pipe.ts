import {Pipe, PipeTransform} from '@angular/core';
import {New} from './news/new.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'datify'
})
export class DatifyPipe implements PipeTransform {
  transform(news: New[], value?: NgbDateStruct): any {
    if (value) {
      const date = new Date(0);
      date.setHours(0);
      date.setDate(value.day);
      date.setMonth(value.month - 1);
      date.setFullYear(value.year);
      news = news.filter(n => n.datetime > date.getTime() && n.datetime <= date.getTime() + 86400000);
    }
    return news;
  }

}
