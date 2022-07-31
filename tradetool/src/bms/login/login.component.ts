import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormRefModel } from './login.model';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  title = 'LoginComponent';
  formRefModel: FormRefModel = new FormRefModel(this.fb);
  errorMessage: string | undefined;
  constructor(private fb: FormBuilder, private _authenticationService: AuthenticationService) { }

  ngOnInit(): void {

    // this._loginserviceService.GetQueryData().subscribe((data: any) => {
    //   console.log(data);
    //this.queryData = data;
    //})

    // this._activatedRoute.paramMap.subscribe(
    //   params => {
    //     const id = params.get('LoginParams');
    //     console.log("LoginParams", id);
    //   }
    //)
    //this._activatedRoute.snapshot.paramMap.get('id')
    //this._activatedRoute.snapshot.queryParamMap.get('id')

  }

  onSubmit() {
    // this.Login();
    console.log('j');
  }


  Login() {
    //  console.log("Login");

    let loginData: User = {
      username: this.formRefModel.userName,
      password: this.formRefModel.password,
      firstName: '',
      lastName: ''
    }
    debugger;
    this._authenticationService.login(this.formRefModel.userName, this.formRefModel.password).subscribe((data: any) => {
      console.log("data", data.token);
      //  sessionStorage.setItem('token', data.token)
    },
      (err) => { debugger; this.errorMessage = err.message; });

    if (sessionStorage.getItem('token') != null) {
      //this.router.navigateByUrl("/Query")
    }
  }

  Clear() {
    sessionStorage.clear();
  }

}
