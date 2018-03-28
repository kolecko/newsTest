import {Component} from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ArchivedService} from './archived.service';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html'
})
export class ArchivedComponent {
  public date: NgbDateStruct;

  constructor(
    public archivedService: ArchivedService
  ) {
  }
}
