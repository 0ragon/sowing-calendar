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
import {NewCardComponent} from './components/new-card/new-card.component';
import {SowingComponent} from './components/sowing/sowing.component';
import {MapComponent} from './components/map/map.component';
import {LiteratureComponent} from './components/library/literature/literature.component';
import {MagazinesComponent} from './components/library/magazines/magazines.component';
import {AppService} from './services/app.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InterceptorService} from './services/interceptor.service';
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CreatePlanComponent } from './components/sowing/create-plan/create-plan.component';
import {RemoveConfirmComponent} from './components/sowing/remove-confirm/remove-confirm.component';
import { SaveFieldDialogComponent } from './components/main-map/save-field-dialog/save-field-dialog.component';
import { OrderSowingDialogComponent } from './components/sowing/order-sowing-dialog/order-sowing-dialog.component';
import {CheckboxModule} from 'primeng/checkbox';
import {AuthGuard} from './services/auth.guard';
import {LoginGuard} from './services/login.guard';

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
    SowingComponent,
    MapComponent,
    LiteratureComponent,
    MagazinesComponent,
    CreatePlanComponent,
    RemoveConfirmComponent,
    SaveFieldDialogComponent,
    OrderSowingDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcla_l17b_LUqgvMbimVsvkpcFBq4fD3Q'
    }),
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    CheckboxModule
  ],
  entryComponents: [
    CreatePlanComponent,
    RemoveConfirmComponent,
    SaveFieldDialogComponent,
    OrderSowingDialogComponent
  ],
  providers: [AuthService, MapService, AppService, AuthGuard, LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
