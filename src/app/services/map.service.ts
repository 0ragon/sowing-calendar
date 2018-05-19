import {Injectable} from '@angular/core';
import {Coords} from '../models/coords.class';

@Injectable()
export class MapService {
  private _coords: Coords = null;
  locationTrackingBlocked = false;
  locationTrackingError = false;

  get coords(): Coords {
    return this._coords;
  }

  constructor() {
  }

  getLocation() {
    if (!this.coords || !this.locationTrackingBlocked) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.handleGeolocationSuccess(position),
             (error) => this.handleGeolocationError(error)
      );
    }
  }

  isLocationBlocked(): boolean {
    return this.locationTrackingBlocked;
  }

  private handleGeolocationSuccess(position) {
    if (position) {
      this._coords = {
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };
    }
  }

  private handleGeolocationError(error) {
    if (error.PERMISSION_DENIED) {
      this.locationTrackingBlocked = true;
    } else {
      this.locationTrackingError = true;
    }
  }
}
