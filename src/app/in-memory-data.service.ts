import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
     
    ];
    return {tasks};
  }

  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(Task => Task.id)) + 1 : 11;
  }
}