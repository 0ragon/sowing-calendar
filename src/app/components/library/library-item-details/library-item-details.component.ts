import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-library-item-details',
  templateUrl: './library-item-details.component.html',
  styleUrls: ['./library-item-details.component.scss']
})
export class LibraryItemDetailsComponent implements OnInit {
  constructor(private _route: Router) { }

  ngOnInit() {
    console.log('router', this._route);
  }

}
