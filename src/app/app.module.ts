import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NewsComponent} from './news/news.component';
import {ArchivedComponent} from './archived/archived.component';
import {AppRoutingModule} from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    ArchivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
