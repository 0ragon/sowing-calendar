import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {MainMapComponent} from './components/main-map/main-map.component';
import {MainComponent} from './components/main/main.component';
import {LibraryComponent} from './components/library/library.component';
import {CulturesComponent} from './components/library/cultures/cultures.component';
import {LibraryItemDetailsComponent} from './components/library/library-item-details/library-item-details.component';
import {NewsComponent} from './components/news/news.component';
import {NewDetailsComponent} from './components/news/new-details/new-details.component';
import {NewsListComponent} from './components/news/news-list/news-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'main-map',
    component: MainMapComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'library',
    component: LibraryComponent,
    children: [
      {
        path: '',
        redirectTo: 'cultures',
        pathMatch: 'full'
      },
      {
        path: 'cultures',
        component: CulturesComponent,
      },
      {
        path: 'cultures/:id',
        component: LibraryItemDetailsComponent,
      }
    ]
  },
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: '',
        redirectTo: 'news-list',
        pathMatch: 'full'
      },
      {
        path: 'news-list',
        component: NewsListComponent
      },
      {
        path: ':id',
        component: NewDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
