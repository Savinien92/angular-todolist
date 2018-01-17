/**
 * Angular Import
 */


import { Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class TaskService implements OnInit {

  public tasks: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(
    private snackBar: MatSnackBar
  ) {}

  // status 3 = urgent
  // status 2 = normal
  // status 1 = bas

  ngOnInit(){
  }

  updateData() {
    // check if tasks exist in localStorage
    if(localStorage.getItem('tasks') !== null) {
      // tasks is not null
      return JSON.parse(localStorage.getItem('tasks'));
    } else {
      // tasks is null
      return false
    }

  }

  // notification material component
  openSnackBar(message, action) {
    this.snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'left',
      verticalPosition: 'top',
      extraClasses: 'snack-bar-custom'
    });
  }

  // get all tasks
  getTasks() {

    // check if tasks exist in localStorage
    if(localStorage.getItem('tasks') !== null) {
      // tasks is not null
      return JSON.parse(localStorage.getItem('tasks'));
    } else {
      // tasks is null
      return false
    }
  }

  // get task by id
  getTask(id) {

    // get all stacks and task by id
    let tasks = this.getTasks(),
        task = tasks.filter(obj => obj.id === id),
        index = tasks.findIndex(obj => obj.id === id)

    // return object with task and her index
    return [{'task' : task, 'index' : index}]
  }

  // post task
  postTask(title, status) {

    let newId:string = new Date().getTime().toString(),
        newTitle:string = title,
        newStatus:number = parseInt(status),
        newTask = { 'id' : newId, 'title' : newTitle, 'status' : newStatus , 'done' : false},
        tasks = this.getTasks()

    // is tasks existe
    if(tasks !== false) {
      tasks.push(newTask)
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } else {
      localStorage.setItem('tasks', JSON.stringify([newTask]))
    }

    // notification
    this.openSnackBar('Task create', '')
  }

  // update task by id
  updateTask(id, title, status) {

    let tasks = this.getTasks(),
        task = this.getTask(id)

    // change values
    tasks[task[0].index].title = title
    tasks[task[0].index].status = parseInt(status)

    // set tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks))

    // notification
    this.openSnackBar('Task update', '')
  }

  // delete task by id
  deleteTask(id) {

    // get all staks and task by id
    let tasks = this.getTasks(),
        task = this.getTask(id)

    // delete task
    tasks.splice(task[0].index, 1)

    // if tasks is empty
    if(tasks.length === 0) {
      // remove tasks to localStorage
      localStorage.removeItem('tasks')
    } else {
      // set tasks to localStorage
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // notification
    this.openSnackBar('All Tasks delete', '')
  }


  // delete tasks
  deleteTasks() {
    // remove tasks to localStorage
    localStorage.removeItem('tasks')

    // notification
    this.openSnackBar('Task delete', '')
  }

  // done task
  doneTask(id, type) {

    // get all staks and task by id
    let tasks = this.getTasks(),
        task = this.getTask(id),
        msg = ''

    // if type is true
    if(type){
      // set task done to false
      tasks[task[0].index].done = false
      msg = 'Task undone'
    } else {
      // set task done to true
      tasks[task[0].index].done = true
      msg = 'Task done'
    }

    // set tasks to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks))

    // notification
    this.openSnackBar(msg, '')
  }

}
