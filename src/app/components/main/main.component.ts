import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  news: any[] = []

  constructor(private _app: AppService) {
  }

  ngOnInit() {
    this.news = this._app.news.slice(0, 2);
  }

}
