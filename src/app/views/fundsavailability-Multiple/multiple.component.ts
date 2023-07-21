let tableData = [];
import { sanitizeIdentifier } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Multiple } from './multiple.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {SelectionModel} from '@angular/cdk/collections';
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
  selector: 'funds-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss']
})
export class MultipleComponent implements OnInit {
 
  constructor(private route : Router, private userService : Multiple) { }
  columnDefs:any = [ 'Select','Account Number', 'Account Descreption', 'Account Officer','Created By','Created Time'];
  public dataSource :any=[] ;
 
  selection = new SelectionModel<PeriodicElement>(true, []);

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
  ngOnInit() {
    this.loadData();
  }
loadData=()=>{
  this.userService.getAll().then((res: any)=>{   
    let resData :any =[];
    res.data.map((fund : any,index:number)=>{
      resData.push(
          {
              'Account_Number':fund.debitaccountNumber,
              'Account_Descreption':fund.accountDescription,
              'Account_Officer':fund.accountOfficer,
              'Created_By':localStorage.getItem('email'),
              'Created_Time':fund.creationDate,
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
  approve=()=>{
    let ids : any = [];
    this.selection.selected.map((row:any)=>{
      ids.push(row.id);
    });
    this.userService.approve(ids)
    .then(res=>{
      if(res.status == 200){
        Swal.fire("Batch Approved !");
        this.loadData();
      }
    })
    .catch(err=>{console.log(err)})
  }
  reject=()=>{
    let ids : any = [];
    this.selection.selected.map((row:any)=>{
      ids.push(row.id);
    });
    this.userService.reject(ids)
    .then(res=>{
      if(res.status == 200){
        Swal.fire("Batch Rejected !");
        this.loadData();
      }
    })
    .catch(err=>{console.log(err)})
  }
}
