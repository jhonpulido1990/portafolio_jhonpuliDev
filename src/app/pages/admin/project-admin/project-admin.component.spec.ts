import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAdminComponent } from './project-admin.component';

describe('ProjectAdminComponent', () => {
  let component: ProjectAdminComponent;
  let fixture: ComponentFixture<ProjectAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
