import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';
// import { AgGridModule } from 'ag-grid-angular';
import { MultipleComponent } from './multiple.component';
import { MultipleRoutingModule } from './multiple-routing.module';
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
    MultipleRoutingModule,
    //BsDropdownModule,
    // MatSelectModule,
    // AgGridModule.withComponents([UsersComponent]),
    // ButtonsModule.forRoot()
  ],
  declarations: [ MultipleComponent ]
})
export class MultipleModule { }
