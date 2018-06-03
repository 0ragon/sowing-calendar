import {Component, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../../../assets/styles/auth-form.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private _app: AppService, private _toastr: ToastrService) {
  }

  ngOnInit() {
  }

  login() {
    const body = {
      email: this.email,
      password: this.password
    };
    this._app.showLoader();
    this._app.login(body)
      .subscribe(
        res => {
          this.saveToken(res['token']);
          console.log('res', res);
          this._app.onAuth(true);
          this._toastr.success('Логін успішний');
        },
        err => this._toastr.error('Не вдалося увійти')
      );
    this._app.hideLoader();
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  isEnabled() {
    if (!this.email || !this.password) {
      return false;
    }

    if (this.email.length < 8 || this.password.length < 8) {
      return false;
    }

    return true;
  }

  onEmailChange(event) {
    this.email = event.target.value;
  }

  onPasswordChange(event) {
    this.password = event.target.value;
  }
}
