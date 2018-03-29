import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {New} from './new.model';

@Injectable()
export class NewsService {
  newsObservable: Observable<any>;
  news: New[] = [];

  constructor(
    private _afs: AngularFirestore
  ) {
    const afsCollection = _afs.collection('news', ref => ref.orderBy('datetime', 'desc'));
    this.newsObservable = afsCollection.valueChanges();
    this.newsObservable.map(data => data as New[]).subscribe(data => this.news = data);
  }
}
