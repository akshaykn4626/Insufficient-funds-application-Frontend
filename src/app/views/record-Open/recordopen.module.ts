import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
// import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordOpenComponent } from './recordopen.component';
import { RecordOpenRoutingModule } from './recordopen-routing.module';
import { CommonModule } from '@angular/common';
import { MatSelectModule} from '@angular/material/select'
import { MatCardModule } from '@angular/material/card';

import { PdfViewerModule } from 'ng2-pdf-viewer';
@NgModule({

  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    PdfViewerModule,
    RecordOpenRoutingModule,
    // BsDropdownModule,
    // ButtonsModule.forRoot()
  ],
  declarations: [ RecordOpenComponent ]
})
export class RecordOpenModule { }
