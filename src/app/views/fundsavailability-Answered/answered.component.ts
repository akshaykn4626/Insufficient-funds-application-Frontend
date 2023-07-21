let tableData = [];
import { sanitizeIdentifier } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Answered } from './answered.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
// import "./../../../../../node_modules/ag-grid-community/src/styles"
// import "ag-grid-community/dist/style/ag-theme-balham.css";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
@Component({
  selector: 'funds-answered',
  templateUrl: './answered.component.html',
  styleUrls: ['./answered.component.scss']
})
export class AnsweredComponent implements OnInit {
 // rowStyle={ 'background-color':'white'}
  constructor(private route : Router, private userService : Answered) { }
  columnDefs:any = ['Customer Number','Customer Name' , 'Account Number',  'Currency', 'Amount','Account Officer','Alternative Account Officer','Date mail sent to AO','Status'];
  public dataSource :any ;
  ngOnInit() {
    this.userService.get().then((res: any)=>{   
      let resData :any =[];
      res.data.map((fund : any,index:number)=>{
        resData.push({
                'Customer_Number':fund.customerNumber,
                'Customer_Name':fund.customerName,
                'Account-Number':fund.accountNumber,
                'Currency':fund.transactionCurrency,
                'Amount':fund.trasactionAmount,
                'Account_Officer':fund.accountOfficer,
                'Alternative_Account_officer':fund.altAccountOfficer,
                'Date_mail_sent_to_AO':fund.dateMailSent,
                'Status':fund.status.name,
                id:fund.id
            }
        );
      });
      this.dataSource = resData;
    })
    .catch(err=>{
      console.log(err);
    })
  }

  createUser=()=>{
    this.route.navigate(["/users/createuser"]);
  }
  editUser=(id:string)=>{
    console.log(id);
    this.route.navigate(["/users/edituser/"+id]);
  }
}
