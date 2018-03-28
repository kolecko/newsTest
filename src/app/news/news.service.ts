import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {New} from './new.model';

@Injectable()
export class NewsService {
  news: Observable<any>;
  constructor(
    private _afs: AngularFirestore
  ) {
    this.news = _afs.collection('news').valueChanges()
      .map(data => {
        const news = data as New[];
        news.forEach(n => {
          n.datetime = new Date(n.datetime);
        });
        return news;
      });
  }

}
