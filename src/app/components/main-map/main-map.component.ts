import {Component} from '@angular/core';

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
  lat = 0;
  lng = 0;
  zoom = 10;
  paths: Coords[] = [
    // {lat: 0, lon: 10},
    // {lat: 0, lon: 0},
    // {lat: 10, lon: 20},
    // {lat: 10, lon: 10},
    // {lat: 0, lon: 10}
  ];

  constructor() {
  }

  onMapClick(event) {
    console.log('paths', this.paths);
    const newCoords: Coords[] = [];
    if (this.paths.length < 2) {
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
      console.log('new', newCoords);
    }
  }

  onRightClick() {
    this.paths = [];
  }
}
