import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {ArchivedComponent} from './archived/archived.component';

const appRoutes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'archived', component: ArchivedComponent},
  {path: '', redirectTo: '/news', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
