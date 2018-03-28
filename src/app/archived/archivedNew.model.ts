import {New} from '../news/new.model';

export class ArchivedNew extends New {
  constructor(item: New) {
    super();
    this.title = item.title;
    this.description = item.description;
    this.content = item.content;
    this.datetime = item.datetime;
  }

  datetimeArchived?: Date;
}
