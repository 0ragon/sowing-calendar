import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-library-side-menu',
  templateUrl: './library-side-menu.component.html',
  styleUrls: ['./library-side-menu.component.scss']
})
export class LibrarySideMenuComponent implements OnInit {
  @Input() menuItems;
  selectedItem;

  constructor() {
  }

  ngOnInit() {
    console.log(this.menuItems);
    if (this.menuItems) {
      this.selectedItem = this.menuItems[0];
    }
  }

  onItemSelect(tab) {
    this.selectedItem = tab;
  }

}
