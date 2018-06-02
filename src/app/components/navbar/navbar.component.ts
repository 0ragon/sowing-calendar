import { Component, OnInit } from '@angular/core';
import {AppService} from '../../services/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuItems = [
    {text: 'Головна', route: 'main'},
    {text: 'Карта', route: 'main-map'},
    {text: 'Сівозміна', route: 'sowing'},
    {text: 'Бібліотека', route: 'library'},
    {text: 'Новини', route: 'news'},
    {text: 'Інформація', route: 'info'}
  ];
  constructor(public _appService: AppService) { }

  ngOnInit() {
  }

}
