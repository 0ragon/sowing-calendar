import {Component, Input, OnInit} from '@angular/core';

export class LibraryItem {
  name: string;
  description: string;
  photo: string;
  url: string;
}
@Component({
  selector: 'app-library-item',
  templateUrl: './library-item.component.html',
  styleUrls: ['./library-item.component.scss']
})
export class LibraryItemComponent implements OnInit {
  @Input() item;
  constructor() { }

  ngOnInit() {
  }

}
