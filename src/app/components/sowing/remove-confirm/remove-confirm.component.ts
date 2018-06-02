import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../../../services/app.service';

@Component({
  selector: 'app-remove-field',
  templateUrl: './remove-confirm.component.html',
  styleUrls: ['./remove-confirm.component.scss']
})
export class RemoveConfirmComponent implements OnInit {
  @Input() message;
  constructor(private _appService: AppService,
              public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }
}
