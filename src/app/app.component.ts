import {Component, OnInit} from '@angular/core';
import {MapService} from './services/map.service';
import {BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BsModalService]
})
export class AppComponent implements OnInit {
  userCredentials = {name: 'Igor'};

  constructor(private _mapService: MapService) {
  }

  ngOnInit() {
    this._mapService.getLocation();
    // setInterval(() => console.log(this._mapService.coords), 1000);
  }
}
