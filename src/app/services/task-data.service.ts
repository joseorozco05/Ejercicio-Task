import { Injectable } from '@angular/core';
import {Task} from '../models/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from '../message.service';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TaskDataService {
  private taskesUrl = 'api/task';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

   
  add(task:Task){
    let tasks:Task[]=[];
    if(localStorage.getItem('tasks')!=null){
      tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  getAll():Task[]{
    return JSON.parse(localStorage.getItem('tasks'));
  }
  getTask(): Observable<Task[]> {
    this.messageService.add('HeroService: fetched task');
  return of(tasks);
  }

  private log(message: string) {
    this.messageService.add(`taskdataService: ${message}`);
  }
}
