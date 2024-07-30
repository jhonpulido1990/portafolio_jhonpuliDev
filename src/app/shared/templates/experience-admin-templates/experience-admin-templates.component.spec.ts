import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceAdminTemplatesComponent } from './experience-admin-templates.component';

describe('ExperienceAdminTemplatesComponent', () => {
  let component: ExperienceAdminTemplatesComponent;
  let fixture: ComponentFixture<ExperienceAdminTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceAdminTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceAdminTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
