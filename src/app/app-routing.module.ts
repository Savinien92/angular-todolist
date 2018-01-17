/**
 * Angular Import
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Components Import
 */

import { TasklistComponent } from './taskboard/tasklist/tasklist.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: TasklistComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
