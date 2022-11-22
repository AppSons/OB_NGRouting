import { Component, Input, OnInit } from '@angular/core';
import { ITask, LEVELS } from 'src/app/models/task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask = {
    title: 'Task',
    description: 'Task description',
    level: LEVELS.Info,
    complete: false

  };

  constructor() { }

  ngOnInit(): void {
  }

}
