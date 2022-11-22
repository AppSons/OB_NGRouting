import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

import { ITask, LEVELS } from '../../models/task.interface';

@Component({
  selector: 'app-kanban-tasks',
  templateUrl: './kanban-tasks.component.html',
  styleUrls: ['./kanban-tasks.component.scss'],
})
export class KanbanTasksComponent {

  todoTasks: ITask[] = [
    {
      title: 'Animaciones',
      description: 'Aprender animaciones Angular',
      complete: false,
      level: LEVELS.Info
    },
    {
      title: 'Angular CLI',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      complete: false,
      level: LEVELS.Urgent
    },
    {
      title: 'Build',
      description: 'Aprender a generar BUILDs',
      complete: false,
      level: LEVELS.Info
    },
    {
      title: 'Deploy',
      description: 'Aprender a hacer desplieges en Angular',
      complete: false,
      level: LEVELS.Info
    }
  ];
  doneTasks: ITask[] = [
    {
      title: 'Configuración IDE',
      description: 'Instalar y Configurar VSCode',
      complete: true,
      level: LEVELS.Blocking
    },
    {
      title: 'Instalar Angular CLI',
      description: 'Aprender comandos y configuraciones de Angular CLI',
      complete: true,
      level: LEVELS.Blocking
    }
  ];

  
  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      //Actualizamos el valor completed de la tarea
      event.previousContainer.data[event.previousIndex].complete = !event.previousContainer.data[event.previousIndex].complete;
      
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
