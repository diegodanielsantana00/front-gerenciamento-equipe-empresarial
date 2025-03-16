import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { StatusTaskService } from '../../../core/services/statusTask.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { TaskAppService } from '../../../core/services/taskApp.service';

@Component({
  selector: 'app-project-tasks',
  imports: [
    HeaderComponent,
    NgIf,
    FormsModule,
    NgFor
  ],
  templateUrl: './project-tasks.component.html',
  styleUrl: './project-tasks.component.css'
})
export class ProjectTasksComponent {
  isModalOpenStatus = false;
  isModalOpenTask = false;
  status: any[] = [];
  users: any[] = [];
  tasks: any[] = [];
  projectName = '';
  errorMessage = '';
  statusName = '';
  statusOrder = '';
  projectIdSave = 0;
  filterStatus = -1;
  filterOrderBy = 1;
  filterPage = 1;
  AllPage = 1;
  
  task = {
    id: 0,
    name: '',
    title: '',
    project: 0,
    description: '',
    storyPoints: 0,
    userResponsible: 0,
    statusTask: 0,
    priorityTask: 0
  };

  constructor(
    private statusTaskService: StatusTaskService, 
    private userService: UserService, 
    private taskAppService: TaskAppService,
    private router: Router, 
     private route: ActivatedRoute
      ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('idproject');
      if (projectId) {
          this.task.project = Number(projectId);
          this.projectIdSave = Number(projectId)
          this.getAllStatusByProject(Number(projectId));
          this.GetAllUsersByProject(Number(projectId));
          this.GetAllTasks(Number(projectId));
        }
    });
  }

  GetAllTasks(id: number) {
    this.taskAppService.GetAllTasks(id, this.filterStatus, this.filterOrderBy, this.filterPage).subscribe({
      next: (response) => {
        console.log(response)
        this.tasks = response.tasks
      },
      error: () => {
        // this.errorMessage = 'Ocorreu um erro ao pegar o cadastro!';
      }
    });
  }

  getAllStatusByProject(id: number) {
    this.statusTaskService.getAllStatusByProject(id).subscribe({
      next: (response) => {
        console.log(response)
        this.status = response.status
      },
      error: () => {
        // this.errorMessage = 'Ocorreu um erro ao pegar o cadastro!';
      }
    });
  }

  GetAllUsersByProject(id: number) {
    this.userService.GetAllUsersByProject(id).subscribe({
      next: (response) => {
        console.log(response)
        this.users = response.users
      },
      error: () => {

        // this.errorMessage = 'Ocorreu um erro ao pegar o cadastro!';
      }
    });
  }

  
  openModalStatus() {
    this.isModalOpenStatus = true;
  }

  closeModalStatus() {
    this.isModalOpenStatus = false;
  }

  openModalTask() {
    this.task = {
      id: 0,
      name: '',
      title: '',
      project: 0,
      description: '',
      storyPoints: 0,
      userResponsible: 0,
      statusTask: 0,
      priorityTask: 0
    };
    this.isModalOpenTask = true;
  }

  closeModalTask() {
    this.isModalOpenTask = false;
  }

  deleteTask(idTask: number) {
    this.taskAppService.Delete(idTask).subscribe({
      next: () => {
        this.GetAllTasks(this.projectIdSave)
      },
      error: () => {
        // this.errorMessage = 'Ocorreu um erro ao pegar o cadastro!';
      }
    });
  }

  
  
  
  submitFormTask() {
    this.taskAppService.createOrUpdate(this.task).subscribe({
      next: () => {
        console.log('Tarefa cadastrada:', this.projectName);
        this.GetAllTasks(this.projectIdSave)
        this.closeModalTask();
      },
      error: () => {
        this.errorMessage = 'Ocorreu um erro ao realizar o cadastro!';
      }
    });
  }

  submitFormStatus() {
    this.statusTaskService.createOrUpdate(0, this.statusName, Number(this.statusOrder), this.projectIdSave).subscribe({
      next: () => {
        console.log('Status cadastrado:', this.projectName);
        this.getAllStatusByProject(this.projectIdSave);
        this.closeModalStatus();
      },
      error: () => {
        this.errorMessage = 'Ocorreu um erro ao realizar o cadastro!';
      }
    });
  }

}
