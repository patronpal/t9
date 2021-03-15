import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from '../task.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) {
  }
  sendTaskToBase(task: string): void  {
    this.http.post(`https://test9-23a4b-default-rtdb.firebaseio.com/tasks.json`, task);
  }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`https://test9-23a4b-default-rtdb.firebaseio.com/tasks.json`);
  }
}
