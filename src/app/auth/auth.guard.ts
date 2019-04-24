import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService, private router:Router){ }

    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        return this.checkLogin();
    }

    checkLogin(){
        if(this.authService.user != null){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}