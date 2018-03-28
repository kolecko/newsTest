import { Component, OnInit } from '@angular/core';
import {ArchivedNew} from './archivedNew.model';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit {
  archived: ArchivedNew[] = [];

  constructor() { }

  ngOnInit() {
  }

}
