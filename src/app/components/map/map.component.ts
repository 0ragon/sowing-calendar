import {Component, Input, OnInit} from '@angular/core';
import {LatLngLiteral} from '@agm/core';
import {MainMapComponent} from '../main-map/main-map.component';
import {BsModalService} from 'ngx-bootstrap/modal';
import {MapService} from '../../services/map.service';
import {AppService} from '../../services/app.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent extends MainMapComponent implements OnInit {
  @Input() polygonPoints: LatLngLiteral[];
  constructor(private mapService: MapService,
              private modalService: NgbModal,
              // private modalService: BsModalService,
              private appService: AppService) {
    super(mapService, modalService, appService);
  }

  ngOnInit() {
    this.setDefaults();
  }

}
