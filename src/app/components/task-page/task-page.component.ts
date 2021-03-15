import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TaskService} from '../../services/task.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task-page',
  templateUrl: './task-page.component.html',
  styleUrls: ['./task-page.component.scss']
})
export class TaskPageComponent implements OnInit {

  form: FormGroup;

  constructor(
    private http: HttpClient,
    private taskService: TaskService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup(
      {
        email: new FormControl(null, [
            Validators.required,
            Validators.email
          ]
        ),
        password: new FormControl(null, [
            Validators.required,
            Validators.minLength(6)
          ]
        ),
        task: new FormControl(null, Validators.required)
      }
    );
  }

  sendTask(): void {
    this.taskService.sendTaskToBase(this.form.value.task);
  }

  submit(): void {
    this.router.navigate(['/login']);
  }

}
