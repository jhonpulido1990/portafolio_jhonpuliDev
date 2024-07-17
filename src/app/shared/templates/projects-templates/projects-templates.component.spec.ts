import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsTemplatesComponent } from './projects-templates.component';

describe('ProjectsTemplatesComponent', () => {
  let component: ProjectsTemplatesComponent;
  let fixture: ComponentFixture<ProjectsTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
