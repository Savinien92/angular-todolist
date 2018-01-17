/**
 * Angular Import
 */

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

/**
 * Services Import
 */

import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasknew',
  templateUrl: './tasknew.component.html',
  styleUrls: ['./tasknew.component.scss']
})

export class TasknewComponent {

  tForm: FormGroup
  title:string = ''
  status:number = 1

  constructor(
    private taskService: TaskService,
    private taskForm: FormBuilder
  ) {

    this.createForm()

  }

  createForm(){
    this.tForm = this.taskForm.group({
      'title' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
      'status' : [null, Validators.required],
      'validate' : ''
    })
  }

  onSubmit(post) {
    this.taskService.postTask(post.title, post.status)
  }

}
