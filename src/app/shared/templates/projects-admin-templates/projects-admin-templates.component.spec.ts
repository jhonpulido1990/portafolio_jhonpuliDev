import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAdminTemplatesComponent } from './projects-admin-templates.component';

describe('ProjectsAdminTemplatesComponent', () => {
  let component: ProjectsAdminTemplatesComponent;
  let fixture: ComponentFixture<ProjectsAdminTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsAdminTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsAdminTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
