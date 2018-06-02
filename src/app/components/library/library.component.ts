import { Component, OnInit } from '@angular/core';
import {componentFactoryName} from '@angular/compiler';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  tabItems = [
    {name: 'Культури', route: 'cultures'},
    {name: 'Література', route: 'literature'},
    {name: 'Інше', route: 'magazines'}
  ];
  selectedTab = this.tabItems[0];
  constructor() { }

  ngOnInit() {
  }

  onTabSelect(tab) {
    this.selectedTab = tab;
  }
}
