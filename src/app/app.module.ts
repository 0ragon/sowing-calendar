import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AgmCoreModule } from '@agm/core';
import { MainMapComponent } from './components/main-map/main-map.component';

// AIzaSyCcla_l17b_LUqgvMbimVsvkpcFBq4fD3Q

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MainMapComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCcla_l17b_LUqgvMbimVsvkpcFBq4fD3Q'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
