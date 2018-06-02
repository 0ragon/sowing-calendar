import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AppService} from '../../../services/app.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Field} from '../../../models/field.class';
import {Plan} from '../../../models/plan.class';

@Component({
  selector: 'app-create-plan',
  templateUrl: './create-plan.component.html',
  styleUrls: ['./create-plan.component.scss']
})
export class CreatePlanComponent implements OnInit {
  planItem: Plan = {
    year: 2018,
    culture: 'Кукурудза',
    sowingDate: '',
    harvestDate: '',
    notes: ''
  };
  defaultPlanItem = {
    year: 2018,
    culture: 'Кукурудза',
    plantDate: '25 січня',
    gatherDate: '45 червня',
    notes: 'Dont eat this'
  };
  cultures;
  constructor(private _appService: AppService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
    this.cultures = this._appService.cultures_short;
  }

  submit() {
      this.activeModal.close(this.planItem);
  }
}
