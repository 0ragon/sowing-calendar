import {Component, Input, OnInit} from '@angular/core';
import {New} from '../../models/new.class';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss']
})
export class NewCardComponent implements OnInit {
  @Input() new: New;
  constructor() { }

  ngOnInit() {
  }

}
