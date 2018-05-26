import {Component, OnInit, TemplateRef} from '@angular/core';
import {MapService} from '../../services/map.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LatLngLiteral} from '@agm/core/services/google-maps-types';

// interface Coords {
//   lat: number;
//   lon: number;
// }

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss'],
})
export class MainMapComponent implements OnInit {
  modalRef: BsModalRef;
  selectedMapType;
  mapTypes = ['roadmap', 'hybrid', 'satellite', 'terrain'];
  userCoords: LatLngLiteral;
  locationTrackingBlocked = this._mapService.isLocationBlocked();
  zoom = 8;
  paths: LatLngLiteral[] = [];

  constructor(private _mapService: MapService, private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.selectedMapType = this.mapTypes[0];
    if (this._mapService.coords) {
      this.userCoords = this._mapService.coords;
    } else {
      this.userCoords = {
        lat: 0,
        lng: 0
      };
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  changeMapType(mapTypeId: string) {
    if (mapTypeId) {
      this.selectedMapType = mapTypeId;
    }
  }

  clearMap() {
    this.paths = [];
  }

  onZoomChange(event) {
    this.zoom = event;
  }

  addPolygonPath(coord: LatLngLiteral) {
    if (coord) {
      const newArr = [...this.paths];
      newArr.push(coord);
      this.paths = newArr;
    }

  }

  async findUserLocation() {
    const location = await this._mapService.getLocation();
    if (location && JSON.stringify(location) !== JSON.stringify(this.userCoords)) {
      this.userCoords = Object.assign({}, location);;
    }
  }

  removeLastPolygonPath() {
    const newArr = [...this.paths];
    newArr.pop();
    this.paths = newArr;
  }

  onMapClick(event) {
    this.addPolygonPath(event.coords);
  }
}
