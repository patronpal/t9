import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task.model';
import {TaskService} from '../../services/task.service';
import {Observable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {
  Tasks$: Observable<Task[]>;
  tasksub: Subscription;
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.Tasks$ = this.taskService.getAllTasks()
      .pipe(
        map(taskFromServer => taskFromServer)
        );
  }

}
