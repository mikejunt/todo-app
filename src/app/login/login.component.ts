import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputusername: string = ""
  inputpassword: string = ""

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }
  initLogin() {
    if (this.inputpassword.length > 0 && this.inputusername.length > 0) {
      this.user.login(this.inputusername, this.inputpassword)
    }
  }
}
