import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-cultures',
  templateUrl: './cultures.component.html',
  styleUrls: ['./cultures.component.scss']
})
export class CulturesComponent implements OnInit {
  cultures: any[];
  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this.cultures = this._appService.cultures;
  }
}
