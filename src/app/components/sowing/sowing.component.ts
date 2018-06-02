import {Component, OnInit} from '@angular/core';
import {Field} from '../main-map/main-map.component';
import {AppService} from '../../services/app.service';
import {LatLngLiteral} from '@agm/core';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
// import {BsModalService} from 'ngx-bootstrap/modal';
import {ToastrService} from 'ngx-toastr';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CreatePlanComponent} from './create-plan/create-plan.component';
import {Plan} from '../../models/plan.class';
import {RemoveConfirmComponent} from './remove-confirm/remove-confirm.component';
import {switchMap} from 'rxjs/operators';
import {OrderSowingDialogComponent} from './order-sowing-dialog/order-sowing-dialog.component';

@Component({
  selector: 'app-sowing',
  templateUrl: './sowing.component.html',
  styleUrls: ['./sowing.component.scss']
})
export class SowingComponent implements OnInit {
  fields: Field[];
  selectedField: Field;
  fieldPoints: LatLngLiteral[] = [];
  planItems = [];
  isMapEditable = false;
  planItem: Plan = {
    year: 2018,
    culture: 'Кукурудза',
    sowingDate: '',
    harvestDate: '',
    notes: ''
  };

  constructor(private _appService: AppService,
              private _modalService: NgbModal,
              private _toastr: ToastrService) {
  }

  ngOnInit() {
    this._appService.showLoader();
    this._appService.getFields()
      .subscribe((res: Field[]) => {
        if (res.length > 0) {
          this.fields = res;
          this.selectedField = res[0];
        }
      });
    this._appService.hideLoader();
  }

  addPlanItem() {
    const modalRef = this._modalService.open(CreatePlanComponent);
    modalRef.result.then(res => {
      if (res) {
        this._appService.showLoader();
        this._appService.createPlan(this.selectedField.id, this.getPlanBody(res))
          .subscribe(_ => {
              this._toastr.success('План успішно створено');
              this.planItems.push(_);
            },
            err => this._toastr.error('Не вдалося створити план'));
        this._appService.hideLoader();
      }
    });
  }

  openRemoveFieldModal(field: Field) {
    const modalRef = this._modalService.open(RemoveConfirmComponent);
    modalRef.componentInstance.message = 'Ви впевнені що хочете видалити поле - ' + field.name + '?';
    modalRef.result.then(res => {
      if (res) {
        this._appService.showLoader();
        this._appService.removeField(field.id)
          .subscribe(_ => {
              this.fields = this.fields.filter(el => el.id !== field.id);
              this._toastr.success('Поле ' + field.name + ' успішно видалено');
              if (this.fields.length) {
                this.selectedField = this.fields[0];
              } else {
                this.selectedField = null;
              }
            },
            err => this._toastr.error('Не вдалося видалити поле'));
        this._appService.hideLoader();
      }
    });
  }

  openRemovePlanModal(index: number, planId) {
    const modalRef = this._modalService.open(RemoveConfirmComponent);
    modalRef.componentInstance.message = 'Ви впевнені що хочете видалити план № ' + index;
    modalRef.result.then(res => {
      if (res) {
        this._appService.showLoader();
        this._appService.deletePlan(this.selectedField.id, planId)
          .subscribe((_: Plan) => {
              this._toastr.success('План успішно видалено');
              this.planItems = this.planItems.filter(plan => plan.id !== _.id);
            },
            err => this._toastr.error('Не вдалося видалити план'));
        this._appService.hideLoader();
      }
    });
  }

  toggleMapEdit() {
    this.isMapEditable = !this.isMapEditable;
    if (!this.isMapEditable) {
      this._toastr.success('Зміни збережено');
    }
  }

  onFieldClick(field) {
    if (field !== this.selectedField) {
      this._appService.showLoader();
      this.selectedField = field;
      this._appService.getPlans(this.selectedField.id)
        .subscribe(res => this.planItems = res);
      this._appService.hideLoader();
    }
  }

  editPlan(planId) {
    this._modalService.open(CreatePlanComponent)
      .result.then(res => {
      if (res) {
        this._appService.editPlan(this.selectedField.id, planId, this.getPlanBody(res))
          .pipe(
            switchMap(_ => this._appService.getPlans(this.selectedField.id))
          )
          .subscribe(plans => {
            this.planItems = plans;
            this._toastr.success('План успішно редаговано');
          },
            err => this._toastr.error('Не вдалося редагувати план'));
      }
    });
  }

  orderSowing() {
    this._modalService.open(OrderSowingDialogComponent);
  }

  private getPlanBody(defaultPlan: Plan) {
    return {
      year: 0,
      culture: defaultPlan.culture,
      sowingDate: `${defaultPlan.sowingDate['year']}/${defaultPlan.sowingDate['month']}/${defaultPlan.sowingDate['day']}`,
      harvestDate: `${defaultPlan.harvestDate['year']}/${defaultPlan.harvestDate['month']}/${defaultPlan.harvestDate['day']}`,
      notes: defaultPlan.notes
    };
  }

}
