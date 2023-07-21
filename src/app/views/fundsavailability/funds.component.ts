let tableData = [];
import { sanitizeIdentifier } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Funds } from './funds.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
import {MatCheckboxModule} from '@angular/material/checkbox';
import Swal from 'sweetalert2';
// import "./../../../../../node_modules/ag-grid-community/src/styles"
// import "ag-grid-community/dist/style/ag-theme-balham.css";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
@Component({
  selector: 'funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {
 // rowStyle={ 'background-color':'white'}
  constructor(private route : Router, private userService : Funds) { }
  columnDefs:any = ['Select','Customer_Number','Application','Customer_Name' , 'Account_Number',  'Currency', 'Trans_Amt','Account_Officer','Alternative_Account','Date_mail_sent_to_AO','Status'];
  public dataSource :any =[] ;
  @ViewChild(MatPaginator) paginator :MatPaginator | undefined;
  public companyId = localStorage.getItem("companyId");
  selection = new SelectionModel<PeriodicElement>(true, []);
  ngOnInit() {
    this.loadData();
    
  }
  loadData(){
    let resData :any =[];
    this.userService.get().then((res: any)=>{ 
      if(res.status == 200){
        res.data.map((fund : any,index:number)=>{
          resData.push(
              {
                  'Customer_Number':fund.customerNumber,
                  'Application':fund.application,
                  'Customer_Name':fund.customerName,
                  'Account_Number':fund.debitaccountNumber,
                  'Currency':fund.transactionCurrency,
                  'Date_mail_sent_to_AO':fund.dateMailSent,
                  'Alternative_Account':fund.altAccountOfficer,
                  'Account_Officer':fund.accountOfficer,
                  'Trans_Amt':fund.trasactionAmount,
                  'Status':fund.status.name,
                  id:fund.id
              }
          );
        });
        // tableData = resData;
        // this.dataSource =new MatTableDataSource(tableData);
        // this.dataSource.paginator = this.paginator;
        // console.log( this.dataSource);
        this.dataSource = resData;
      }  
    })
    .catch(err=>{
      console.log(err);
    })
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  
  viewOnly(){
    this.columnDefs = ['Customer_Number','Application','Customer_Name' , 'Account_Number',  'Currency', 'Trans_Amt','Account_Officer','Alternative_Account','Date_mail_sent_to_AO','Status'];
    this.dataSource = this.selection.selected;
  }
  read(){
    if(this.selection){
      console.log(this.selection.selected);
      let ids:any = [];
      this.selection.selected.map((row:any)=>{
        ids.push(row.id)
      });
      console.log(ids);
      this.userService.select(ids)
      .then((res)=>{
        console.log(res)
        if(res.status == 200){
          Swal.fire(" Records Assigned successfully! ");
          this.loadData();
        }
      })
      .catch((err)=>console.log(err));
    }
    

  }
  assign(){
    this.columnDefs = ['Customer_Number','Application','Customer_Name' , 'Account_Number',  'Currency', 'Trans_Amt','Account_Officer','Alternative_Account','Date_mail_sent_to_AO','Status','Assign'];
    let resData :any =[];
    this.userService.assign()
    .then((res)=>{
      if(res.status == 200){
        res.data.map((fund : any,index:number)=>{
          console.log(fund)
          resData.push(
              {
                  
                  'Customer_Number':fund.customerNumber,
                  'Application':fund.application,
                  'Customer_Name':fund.customerName,
                  'Account_Number':fund.debitaccountNumber,
                  'Currency':fund.transactionCurrency,
                  'Date_mail_sent_to_AO':fund.dateMailSent,
                  'Alternative_Account':fund.altAccountOfficer,
                  'Account_Officer':fund.accountOfficer,
                  'Trans_Amt':fund.trasactionAmount,
                  'Status':fund.status.name,
                  'Assign':fund.user.userName,
                  id:fund.id
              }
          );
        });
        // tableData = resData;
        // this.dataSource =new MatTableDataSource(tableData);
        // this.dataSource.paginator = this.paginator;
        // console.log( this.dataSource);
        this.dataSource = resData;
      }  
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
  openRecord=(id:any)=>{
    this.route.navigate(["/availability/record_open"]);
  }
}
