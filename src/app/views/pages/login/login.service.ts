import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {environment} from '../../../../environments/environment.prod';

@Injectable({providedIn:'root'})

export class Login {
    public companyData: any = [];
    constructor(private https: HttpClient){}
    
    logIn(data:any){
        return this.https.post(environment.ANGULAR_APP_BACKENDP_SERVICE+'User/login',data);
    }
}