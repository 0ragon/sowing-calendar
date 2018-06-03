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
import {SowingComponent} from './components/sowing/sowing.component';
import {MagazinesComponent} from './components/library/magazines/magazines.component';
import {LiteratureComponent} from './components/library/literature/literature.component';
import {AuthGuard} from './services/auth.guard';
import {LoginGuard} from './services/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [LoginGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'sowing',
    component: SowingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'main-map',
    component: MainMapComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'library',
    component: LibraryComponent,
    canActivate: [AuthGuard],
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
      },
      {
        path: 'literature',
        component: LiteratureComponent,
      },
      {
        path: 'literature/:id',
        component: LibraryItemDetailsComponent,
      },
      {
        path: 'magazines',
        component: MagazinesComponent,
      },
      {
        path: 'cultures/:id',
        component: LibraryItemDetailsComponent,
      },
    ]
  },
  {
    path: 'news',
    component: NewsComponent,
    canActivate: [AuthGuard],
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
