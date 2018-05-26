import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {AgmCoreModule} from '@agm/core';
import {MainMapComponent} from './components/main-map/main-map.component';
import {MainComponent} from './components/main/main.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AuthService} from './services/auth.service';
import {MapService} from './services/map.service';
import {LibraryComponent} from './components/library/library.component';
import {CulturesComponent} from './components/library/cultures/cultures.component';
import {LibrarySideMenuComponent} from './components/library/library-side-menu/library-side-menu.component';
import {LibraryItemComponent} from './components/library/library-item/library-item.component';
import {LibraryItemDetailsComponent} from './components/library/library-item-details/library-item-details.component';
import {NewsComponent} from './components/news/news.component';
import {NewDetailsComponent} from './components/news/new-details/new-details.component';
import {NewsListComponent} from './components/news/news-list/news-list.component';
import { ModalModule } from 'ngx-bootstrap';
import { NewCardComponent } from './components/new-card/new-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainMapComponent,
    MainComponent,
    NavbarComponent,
    LibraryComponent,
    CulturesComponent,
    LibrarySideMenuComponent,
    LibraryItemComponent,
    LibraryItemDetailsComponent,
    NewsComponent,
    NewsListComponent,
    NewDetailsComponent,
    NewCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcla_l17b_LUqgvMbimVsvkpcFBq4fD3Q'
    }),
    ModalModule.forRoot()
  ],
  providers: [AuthService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
