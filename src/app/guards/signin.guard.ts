import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { getAuthData } from '../helpers/auth.helper';

@Injectable ({
    providedIn: 'root'
})
export class SignInGuard {

    constructor(
        private router: Router
    ){
    }

    canActivate() {
        if (getAuthData() != null) {
            return true;
        }
        else {
            this.router.navigate(['/account/login']);
            return false;
        }
    }

}