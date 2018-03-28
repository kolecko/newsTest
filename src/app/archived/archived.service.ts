import {Injectable} from '@angular/core';
import {ArchivedNew} from './archivedNew.model';
import {New} from '../news/new.model';

@Injectable()
export class ArchivedService {
  archivedNews: ArchivedNew[] = [];

  archive(item: New) {
    const archivedNew = new ArchivedNew(item);
    archivedNew.datetimeArchived = new Date();
    this.archivedNews.push(archivedNew);
  }

  unArchive(index: number) {
    this.archivedNews.splice(index, 1);
  }

  constructor() { }

}
