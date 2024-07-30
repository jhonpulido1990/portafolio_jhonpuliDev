import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCrudComponent } from './project-crud.component';

describe('ProjectCrudComponent', () => {
  let component: ProjectCrudComponent;
  let fixture: ComponentFixture<ProjectCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
