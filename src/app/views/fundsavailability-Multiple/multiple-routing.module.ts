import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MultipleComponent } from './multiple.component';

const routes: Routes = [
  {
    path: '',
    component:MultipleComponent,
    data: {
      title: 'Funds Availability - Multiple'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultipleRoutingModule {}
