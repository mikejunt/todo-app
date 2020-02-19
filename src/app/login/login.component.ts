import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup

  constructor(private user: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.maxLength(12), Validators.minLength(4)])],
      password: ['', Validators.compose([Validators.required, Validators.maxLength(16), Validators.minLength(2)])]
  
    });
  }
  
  initLogin(e) {
    e.preventDefault();
    console.log(e)
    if (this.loginForm.valid)
    {this.user.login(this.loginForm.value.username, this.loginForm.value.password)}
  }
}
