import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../services/task-data.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  task:Task;
  constructor(private taskDatService:TaskDataService) { }

  ngOnInit() {
    this.task={title:'', description:'', priority:false }
    console.log('se inicializa el objeto task');
  }
add():void {
  this.taskDatService.add(this.task);
  alert('Se agrego una nueva tarea');
}
}
