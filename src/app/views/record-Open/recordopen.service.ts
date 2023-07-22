import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import  axios  from  "axios";
import {environment} from '../../../environments/environment.prod';
@Injectable({providedIn:'root'})

export class RecordOpen {
    public userId = localStorage.getItem("userId");
    constructor(private https: HttpClient){}
    creation(data:any){
        console.log(this.userId);
        return axios.post(environment.ANGULAR_APP_BACKENDP_SERVICE+'insufficient/status/unassigned/user/'+this.userId+'/InSufficient', data);
    }
    
}