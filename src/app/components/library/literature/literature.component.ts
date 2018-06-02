import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-literature',
  templateUrl: './literature.component.html',
  styleUrls: ['./literature.component.scss']
})
export class LiteratureComponent implements OnInit {
  literature: any[];

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this.literature = this._appService.books;
  }

}
