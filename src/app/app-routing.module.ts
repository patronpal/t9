import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TaskPageComponent} from './components/task-page/task-page.component';
import {AllTasksComponent} from './components/all-tasks/all-tasks.component';

const routes: Routes = [
  {path: '', component: TaskPageComponent},
  {path: 'login', component: AllTasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
