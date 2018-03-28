import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {ArchivedComponent} from './archived/archived.component';
import {AppRoutingModule} from './app.routing.module';
import {NewsService} from './news/news.service';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {DatePipe} from '@angular/common';
import {DatifyPipe} from './datify.pipe';
import {ArchivedService} from './archived/archived.service';


@NgModule({
  declarations: [
    AppComponent,
    DatifyPipe,
    NewsComponent,
    ArchivedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.fireBaseConfig),
    AngularFirestoreModule,
    NgbModule.forRoot()
  ],
  providers: [DatifyPipe, DatePipe, NewsService, ArchivedService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
