/**
 * Angular Import
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/**
 * Module Import
 */

import { AppMaterialModule } from '../app-material.module';

/**
 * Services Import
 */

import { TaskService } from './task.service';

/**
 * Routing Import
 */

import { TaskboardRoutingModule } from './taskboard-routing.module';

/**
 * Component Import
 */

import { TasknewComponent } from './tasknew/tasknew.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskeditComponent } from './taskedit/taskedit.component';

@NgModule({
  imports: [
    CommonModule,
    TaskboardRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    TasknewComponent,
    TasklistComponent,
    TaskeditComponent
  ],
  providers: [TaskService],
})
export class TaskboardModule { }
