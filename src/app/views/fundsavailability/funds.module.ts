import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';
// import { AgGridModule } from 'ag-grid-angular';
import { FundsComponent } from './funds.component';
import { FundsRoutingModule } from './funds-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatCheckboxModule,
    FundsRoutingModule,
    // BsDropdownModule,
    // MatSelectModule,
    // AgGridModule.withComponents([UsersComponent]),
    // ButtonsModule.forRoot()
  ],
  declarations: [ FundsComponent ]
})
export class FundsModule { }
