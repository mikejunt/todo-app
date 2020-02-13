import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let username = this.user.currentUser
    if (this.user.isLoggedin)
      if (state.url ==='/todos') {
        return true
      }
      else if (next.params.username === username) {
        return true
      }
      else {
        this.router.navigate([`/user/${username}/`])
        return false
      }
    else {
      this.router.navigate(['/login'])
    }
  }

}
