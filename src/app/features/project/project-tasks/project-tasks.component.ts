import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { StatusTaskService } from '../../../core/services/statusTask.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-tasks',
  imports: [
    HeaderComponent,
    NgIf,
    FormsModule
  ],
  templateUrl: './project-tasks.component.html',
  styleUrl: './project-tasks.component.css'
})
export class ProjectTasksComponent {
  isModalOpenStatus = false;
  status: any[] = [];
  projectName = '';
  errorMessage = '';
  statusName = '';
  statusOrder = '';
  projectIdSave = 0;

  constructor(private statusTaskService: StatusTaskService, private router: Router,  private route: ActivatedRoute  ) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = params.get('idproject');
      if (projectId) {
        this.projectIdSave = Number(projectId)
        this.getAllStatusByProject(Number(projectId));
      }
    });
  }

  getAllStatusByProject(id: number) {
    this.statusTaskService.getAllStatusByProject(id).subscribe({
      next: (response) => {
        console.log(response)
        this.status = response.status.result
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
