import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from './login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public formData : any = FormGroup ;
  public submitted: boolean =  false;
  constructor(private route : Router, private loginService : Login){}
  usernames :any =[];
  ngOnInit(){
    this.formData = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    })
  }
  onSubmit(){
    this.submitted=true;
    let payload ={
      email: this.formData.value.email,
      password: this.formData.value.password
    }
    //console.log(this.formData);
    this.loginService.logIn(payload).subscribe((res : any)=>{
      console.log(res);
      Swal.fire("Login Successfull !");
      // localStorage.setItem("loginToke",res.data.token);
      localStorage.setItem("userId", res.id);
      localStorage.setItem("email", res.email);
      // localStorage.setItem("companyId", res.data.user.company._id);
      this.route.navigate(["/"]);
    },err=>{
      console.log(err);
    })
  }
  forbiddenNames(control:FormControl):{[s:string]:any} | null{
    if(this.usernames.indexOf(control.value) !== -1){
      return {'nameIsForbidden':true};
    }
    return null;
  }

  onRegister(){
    this.route.navigate(["/register"]);
  }
 }