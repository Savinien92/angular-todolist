/**
 * Angular Import
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Components Import
 */

import { TasklistComponent } from './tasklist/tasklist.component';
import { TasknewComponent } from './tasknew/tasknew.component';
import { TaskeditComponent } from './taskedit/taskedit.component';

const routes: Routes = [
  {
    path: '',
    component: TasklistComponent,
  },
  {
    path: 'tasks',
    component: TasklistComponent,
  },
  {
    path: 'new-task',
    component: TasknewComponent,
  },
  {
    path: 'edit-task/:taskId',
    component: TaskeditComponent,
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class TaskboardRoutingModule {}
