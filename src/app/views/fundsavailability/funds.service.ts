import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import  axios  from  "axios";
import { environment } from "src/environments/environment.prod";
@Injectable({providedIn:'root'})

export class Funds {
    public userId = localStorage.getItem("userId");
    public Token = localStorage.getItem('loginToken');
    // var headers_Object  = new HttpHeaders();
    public companyData: any = [];
    constructor(private https: HttpClient){}
    get(){
        // axios.defaults.headers.common['Authorization'] = localStorage.getItem("loginToken");
        return axios.get(environment.ANGULAR_APP_BACKENDP_SERVICE+"insufficient/status/unassigned");
    }
    select(data:any){
        let payload = {
            eventSourceId: data
        }
        return axios.post(environment.ANGULAR_APP_BACKENDP_SERVICE+"insufficient/requests/assign/user/"+localStorage.getItem('userId')+"/status/assign",payload)
    }
    assign(){
        return axios.get(environment.ANGULAR_APP_BACKENDP_SERVICE+"insufficient/status/assign/user/"+localStorage.getItem('userId'));
    }
}