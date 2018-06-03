import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '../../../services/app.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-save-field-dialog',
  templateUrl: './save-field-dialog.component.html',
  styleUrls: ['./save-field-dialog.component.scss']
})
export class SaveFieldDialogComponent implements OnInit {
  @Input() data;
  info = {
    fieldName: '',
    fieldDescription: ''
  };

  constructor(private _appService: AppService,
              public activeModal: NgbActiveModal,
              private _toastr: ToastrService) {
  }

  ngOnInit() {
  }

  saveField() {
    console.log('data', this.data);
    console.log('info', this.info);
    // const body = Object.assign({}, this.info, this.data.paths);
    const body = {
      name: this.info.fieldName,
      points: this.data.paths,
      description: this.info.fieldDescription
    };
    console.log('body', body);
    this._appService.showLoader();
    this._appService.createField(body)
      .subscribe(res => {
          this._toastr.success('Поле успішно створено');
          this.activeModal.close();
        },
        err => this._toastr.error('Не вдалося створити поле'));
    this._appService.hideLoader();
  }

}
