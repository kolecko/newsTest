import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {New} from './new.model';
import {Subscription} from 'rxjs/Subscription';

@Injectable()
export class NewsService {
  newsCollection: AngularFirestoreCollection;
  newsObservable: Observable<any>;
  newsSubscription: Subscription;
  news: New[] = [];
  datetime = 0;

  constructor(
    private _afs: AngularFirestore
  ) {
    this.newsCollection = this._afs.collection('news', ref => ref.orderBy('datetime', 'desc'));
    this.observatory();
  }

  observatory() {
    this.newsObservable = this.newsCollection.stateChanges(['added']);
    this.newsSubscription = this.newsObservable
      .map(actions => actions.map(action => {
        const data = action.payload.doc.data() as New;
        data.id = action.payload.doc.id;
        return data;
      }))
      .subscribe(data => this.news = data.concat(this.news));
  }
}
