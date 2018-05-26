import {Injectable} from '@angular/core';
import {LatLngLiteral} from '@agm/core/services/google-maps-types';

@Injectable()
export class MapService {
  private _coords: LatLngLiteral = null;
  locationTrackingBlocked = false;
  locationTrackingError = false;

  get coords(): LatLngLiteral {
    return this._coords;
  }

  constructor() {
  }

  getLocation(): LatLngLiteral | null {
    if (!this.coords || !this.locationTrackingBlocked) {
      navigator.geolocation.getCurrentPosition(
        (position) => this.handleGeolocationSuccess(position),
        (error) => this.handleGeolocationError(error)
      );
    } else {
      this._coords = null;
    }

    return this._coords;
  }

  isLocationBlocked(): boolean {
    return this.locationTrackingBlocked;
  }

  private handleGeolocationSuccess(position) {
    if (position) {
      this._coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    }
  }

  private handleGeolocationError(error) {
    if (error.PERMISSION_DENIED) {
      this.locationTrackingBlocked = true;
    } else {
      this.locationTrackingError = true;
    }

    this._coords = null;
  }
}
