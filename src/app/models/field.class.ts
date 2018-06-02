import {LatLngLiteral} from '@agm/core';

export class Field {
  id?: string | number;
  name: string;
  description: string;
  points: LatLngLiteral[];
}
