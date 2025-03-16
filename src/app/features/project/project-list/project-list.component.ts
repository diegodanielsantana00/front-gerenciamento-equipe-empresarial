import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { ProjectService } from '../../../core/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  imports: [
    HeaderComponent,
    FormsModule,
    NgIf,
    NgFor
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  isModalOpen = false;
  projectName = '';
  errorMessage = '';
  projectList: any[] = [];

  constructor(private projectService: ProjectService, private router: Router) { }
  ngOnInit(): void {
     this.getProjects(); 
  }
  

  goRouteProjectTask(id: number) {
    this.router.navigate([`/project/${id}/tasks`])
  }

  getProjects() {
    this.projectService.getProjects().subscribe({
      next: (response) => {
        this.projectList = response.projects.result
        this.closeModal();

      },
      error: () => {
        // this.errorMessage = 'Ocorreu um erro ao pegar o cadastro!';
      }
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    this.projectService.createOrUpdate(0, this.projectName, 1).subscribe({
      next: () => {
        console.log('Projeto cadastrado:', this.projectName);
        this.getProjects();
        this.closeModal();

      },
      error: () => {
        this.errorMessage = 'Ocorreu um erro ao realizar o cadastro!';
      }
    });
  }
}
