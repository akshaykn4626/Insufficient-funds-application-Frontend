import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import  axios  from  "axios";
import {environment} from '../../../environments/environment.prod';
@Injectable({providedIn:'root'})

export class Data {
    public userId = localStorage.getItem("userId");
    constructor(private https: HttpClient){}
    get(){
        return axios.get(environment.ANGULAR_APP_BACKENDP_SERVICE+"insufficient/fundsavailability/count");
    }
}