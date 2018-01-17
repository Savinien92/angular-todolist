/**
 * Angular Import
 */


import { Component, OnInit } from '@angular/core';

/**
 * Services Import
 */

import { TaskService } from '../task.service'

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent implements OnInit {

  tasks: any;

  constructor(
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks()
  }

  deleteTasks() {
    this.taskService.deleteTasks()
    this.tasks = this.taskService.updateData()
  }

  deleteTask(id) {
    this.taskService.deleteTask(id)
    this.tasks = this.taskService.updateData()
  }

  done(id, type) {
    this.taskService.doneTask(id, type)
    this.tasks = this.taskService.updateData()
  }

}
