import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private authService:AuthService, private router:Router){ }

    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean{
        return this.checkLogin(state.url);
    }

    canLoad(route:Route, segments:UrlSegment[]):boolean{
        const url = segments.map(item => item.path).join('/');
        return this.checkLogin(url);
    }

    checkLogin(url:string){
        if(this.authService.user != null){
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    }
}