import {Component, OnInit} from '@angular/core';
import {MapService} from './services/map.service';
import {AppService} from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  userCredentials = {name: 'Igor'};
  isAuthorized;
  constructor(private _mapService: MapService, private _appService: AppService) {
  }
  ngOnInit() {
    this._mapService.getLocation();
    this.isAuthorized = this._appService.isAuthorized;
    // setInterval(() => console.log(this._mapService.coords), 1000);
  }
}
