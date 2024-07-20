import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTemplatesComponent } from './experience-templates.component';

describe('ExperienceTemplatesComponent', () => {
  let component: ExperienceTemplatesComponent;
  let fixture: ComponentFixture<ExperienceTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
