import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectConfigComponent } from './project-config.component';

describe('ProjectConfigComponent', () => {
  let component: ProjectConfigComponent;
  let fixture: ComponentFixture<ProjectConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectConfigComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
