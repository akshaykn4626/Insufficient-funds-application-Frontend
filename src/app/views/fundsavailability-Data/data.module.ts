import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';
// import { AgGridModule } from 'ag-grid-angular';
import { DataComponent } from './data.component';
import { DataRoutingModule } from './data-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
// import { MatSelectModule} from '@angular/material';
@NgModule({
  imports: [
    FormsModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    DataRoutingModule,
    //BsDropdownModule,
    // MatSelectModule,
    // AgGridModule.withComponents([UsersComponent]),
    //ButtonsModule.forRoot()
  ],
  declarations: [ DataComponent ]
})
export class DataModule { }
