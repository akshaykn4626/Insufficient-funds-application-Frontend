let tableData = [];
import { sanitizeIdentifier } from '@angular/compiler';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from './data.service';
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
  selector: 'funds-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
 // rowStyle={ 'background-color':'white'}
  constructor(private route : Router, private userService : Data) { }
  columnDefs:any = ['Label','Count'];
  public dataSource :any ;
  ngOnInit() {
    let data : any = [];
    this.userService.get()
    .then(res=>{
      if(res.status == 200){
        data.push({label:"No of requests not yet handled",count:res.data.requestsNotYetHandled});
        data.push({label:"No of requests approved",count:res.data.requestApproved});
        data.push({label:"No of requests rejected",count:res.data.requestRejected});
        this.dataSource =  data;
      }
      
    })
    .catch(err=>{console.log(err)})
  }
}
