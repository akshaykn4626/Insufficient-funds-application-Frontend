import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecordOpenComponent } from './recordopen.component';

const routes: Routes = [
  {
    path: '',
    component:RecordOpenComponent,
    data: {
      title: 'User'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordOpenRoutingModule {}
