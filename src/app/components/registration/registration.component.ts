import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss', './../../../assets/styles/auth-form.scss']
})
export class RegistrationComponent implements OnInit {
  isPasswordShown = false;
  info = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };

  constructor(private _app: AppService, private _toastr: ToastrService, private _router: Router) {
  }

  ngOnInit() {
  }

  register() {
    console.log('info', this.info);
    this._app.showLoader();
    this._app.registration(this.info)
      .subscribe(res => {
          this._toastr.success('Реєстрація успішна');
          this._router.navigate(['/login']);
        },
        err => this._toastr.error('Не вдалося зареєструватися'),
        () => this._app.hideLoader());
  }

  togglePasswordVisibility() {
    this.isPasswordShown = !this.isPasswordShown;
  }
}
