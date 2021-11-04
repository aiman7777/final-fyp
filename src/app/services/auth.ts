import {Injectable, NgZone} from '@angular/core' ;
import {Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService{
    constructor(
        public ngFireAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone,
    ) {}
    signIn(email, password){
        return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }
    regUser(email, password){
        return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    }
    signout(){
        return this.ngFireAuth.signOut()
        .then(() =>{
            this.router.navigate(['login'])
        })
    }
}