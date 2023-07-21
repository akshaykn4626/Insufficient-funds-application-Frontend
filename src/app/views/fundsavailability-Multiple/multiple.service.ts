import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import  axios  from  "axios";
import {environment} from '../../../environments/environment.prod';
@Injectable({providedIn:'root'})

export class Multiple {
    public userId = localStorage.getItem("userId");
    public Token = localStorage.getItem('loginToken');
    // var headers_Object  = new HttpHeaders();
    public companyData: any = [];
    constructor(private https: HttpClient){}
    approve(data:any){
        let payload = {
            eventSourceIds:data
        };
        return axios.put(environment.ANGULAR_APP_BACKENDP_SERVICE+'batch/status/proceed/user/'+localStorage.getItem('userId')+'/update-event-sources',payload);
    }
    reject(data:any){
        let payload = {
            eventSourceIds:data
        };
        return axios.put(environment.ANGULAR_APP_BACKENDP_SERVICE+'batch/status/reject/user/'+localStorage.getItem('userId')+'/update-event-sources',payload);
    }
    getAll(){
        return axios.get(environment.ANGULAR_APP_BACKENDP_SERVICE+"batch/status/assign/BatchAssignStatuslist");
    }
}