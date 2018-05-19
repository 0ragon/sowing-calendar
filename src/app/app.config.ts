import {Injectable} from '@angular/core';
import {Coords} from './models/coords.class';

@Injectable()
export class AppConfig {
  defaultCoords: Coords = {lat: 42, lon: 25};
}
