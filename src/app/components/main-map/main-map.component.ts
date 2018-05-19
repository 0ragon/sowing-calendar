import {Component, Input} from '@angular/core';
import {MapService} from '../../services/map.service';

interface Coords {
  lat: number;
  lng: number;
}

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss'],
})
export class MainMapComponent {
  // @Input() params = null;
  userCoords = this._mapService.coords;
  locationTrackingBlocked = this._mapService.isLocationBlocked();
  maxPoints = 4;
  zoom = 4;
  paths = [
    // {lat: 0, lon: 10},
    // {lat: 0, lon: 0},
    // {lat: 10, lon: 20},
    // {lat: 10, lon: 10},
    // {lat: 0, lon: 10}
  ];

  constructor(private _mapService: MapService) {
    // this._mapService.getLocation();
    // setInterval(() => console.log(this.userCoords), 1000);
  }

  onMapClick(event) {
    const newCoords: Coords[] = [];
    if (this.paths.length < 2 && this.paths.length <= this.maxPoints) {
      this.paths.push(event.coords as Coords);
    } else {
      for (const path of this.paths) {
        const newLat = path.lat + (event.coords.lat - path.lat);
        const newLng = path.lng + (event.coords.lng - path.lng);
        newCoords.push({lat: newLat, lng: newLng});
      }
      if (newCoords.length > 1) {
        this.paths = newCoords;
      }
    }
  }

  onRightClick() {
    this.paths = [];
  }
}
