import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggedin: boolean = false;

  constructor(private router: Router) { }
  login(username: string, password: string) {
    this.isLoggedin = true;
    localStorage.setItem("user", `${username}`);
    this.router.navigate([`/user/${username}`])
  }

  logout() {
    this.isLoggedin = false;
    localStorage.clear();
    this.router.navigate(['/login']);

  }
  get currentUser() {
    return null
  }
}
