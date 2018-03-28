import {Pipe, PipeTransform} from '@angular/core';
import {New} from './news/new.model';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Pipe({
  name: 'datify'
})
export class DatifyPipe implements PipeTransform {
  transform(news: New[], date?: Date): any {
    if (date) {
      news = news.filter(n => {
        return (
          n.datetime.getDate() === date.getDate() &&
          n.datetime.getMonth() === date.getMonth() &&
          n.datetime.getFullYear() === date.getFullYear()
        );
      });
    }
    return news;
  }

}
