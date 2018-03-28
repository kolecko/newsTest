import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {New} from './new.model';

@Injectable()
export class NewsService {
  newsObservable: Observable<any>;
  news: New[];
  constructor(
    private _afs: AngularFirestore
  ) {
    this.newsObservable = _afs.collection('news').valueChanges();
    this.newsObservable
      .map(data => {
        const news = data as New[];
        news.forEach(n => {
          n.datetime = new Date(n.datetime);
        });
        return news;
      })
      .subscribe(data => this.news = data);
  }

}
