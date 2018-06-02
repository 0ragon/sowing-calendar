import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../../../services/app.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-order-sowing-dialog',
  templateUrl: './order-sowing-dialog.component.html',
  styleUrls: ['./order-sowing-dialog.component.scss']
})
export class OrderSowingDialogComponent implements OnInit {
  cultures: any[] = [];
  selectedValues: string[] = ['val1', 'val2'];
  constructor(private _appService: AppService,
              public activeModal: NgbActiveModal,
              private _toastr: ToastrService) { }
  ngOnInit() {
    this.cultures = this._appService.cultures_short;
  }

}
