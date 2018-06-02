import {Component, OnInit, TemplateRef} from '@angular/core';
import {MapService} from '../../services/map.service';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {LatLngLiteral} from '@agm/core/services/google-maps-types';
import {AppService} from '../../services/app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SaveFieldDialogComponent} from './save-field-dialog/save-field-dialog.component';

// interface Coords {
//   lat: number;
//   lon: number;
// }
export class Field {
  id?: number;
  name: string;
  description: string;
  points: any[];
}

@Component({
  selector: 'app-main-map',
  templateUrl: './main-map.component.html',
  styleUrls: ['./main-map.component.scss'],
})
export class MainMapComponent implements OnInit {
  selectedMapType;
  mapTypes = ['roadmap', 'hybrid', 'satellite', 'terrain'];
  userCoords: LatLngLiteral;
  locationTrackingBlocked = this._mapService.isLocationBlocked();
  zoom = 8;
  paths: LatLngLiteral[] = [];

  constructor(private _mapService: MapService,
              private _modalService: NgbModal,
              private _appService: AppService) {
  }

  ngOnInit(): void {
    this.setDefaults();
  }

  setDefaults() {
    this._appService.showLoader();
    this.selectedMapType = this.mapTypes[0];
    if (this._mapService.coords) {
      this.userCoords = this._mapService.coords;
    } else {
      this.userCoords = {
        lat: 0,
        lng: 0
      };
    }
    this._appService.hideLoader();
  }

  openModal() {
    const component = this._modalService.open(SaveFieldDialogComponent).componentInstance;
    const data = {
      paths: this.paths,
      userCoords: this.userCoords,
      zoom: this.zoom
    };
    component.data = data;
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
    this._appService.showLoader();
    const location = await this._mapService.getLocation();
    if (location && JSON.stringify(location) !== JSON.stringify(this.userCoords)) {
      this.userCoords = Object.assign({}, location);
    }
    this._appService.hideLoader();
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
