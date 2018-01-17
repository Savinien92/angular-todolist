/**
 * Angular Import
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Services Import
 */


import { TaskService } from '../task.service';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.scss']
})
export class TaskeditComponent implements OnInit, OnDestroy {

  taskId = null
  private _routeEvent

  tForm: FormGroup
  title:string = ''
  status:number = 1
  selectedOption = null


  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private taskForm: FormBuilder
  ) {
    this._routeEvent = this.route.params.subscribe(
      params => {
        this.taskId = params.taskId
        let task = this.taskService.getTask(params.taskId)

        this.tForm = taskForm.group({
          'title' : [task[0].task[0].title, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
          'status' : [task[0].task[0].status, Validators.required],
          'id' : [task[0].task[0].id],
          'validate' : ''
        })
      }
    )
  }

  ngOnInit() {

  }

  onSubmit(post) {
    this.taskService.updateTask(post.id, post.title, post.status)
  }

  ngOnDestroy() {
    this._routeEvent.unsubscribe()
  }

}
