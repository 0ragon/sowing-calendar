import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cultures',
  templateUrl: './cultures.component.html',
  styleUrls: ['./cultures.component.scss']
})
export class CulturesComponent implements OnInit {
  culturesList = [
    {name: 'Кукурудза'},
    {name: 'Кукурудза1'},
    {name: 'Кукурудза2'},
    {name: 'Кукурудза3'},
    {name: 'Кукурудза4'},
    {name: 'Кукурудза5'},
    {name: 'Кукурудза6'},
    {name: 'Кукурудза7'},
    {name: 'Кукурудза8'},
    {name: 'Кукурудза9'},
    {name: 'Кукурудза11'},
    {name: 'Кукурудза111'},
    {name: 'Кукурудза12'},
    {name: 'Кукурудза13'},
    {name: 'Кукурудза14'},
    {name: 'Кукурудза15'},
    {name: 'Кукурудза16'},
    {name: 'Кукурудза17'}
  ];
  selectedCulture = this.culturesList[0];

  constructor() {
  }

  ngOnInit() {
  }

  onCultureSelect(culture) {
    this.selectedCulture = culture;
  }
}
