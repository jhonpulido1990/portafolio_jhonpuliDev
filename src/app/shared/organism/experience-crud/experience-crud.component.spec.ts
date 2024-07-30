import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceCrudComponent } from './experience-crud.component';

describe('ExperienceCrudComponent', () => {
  let component: ExperienceCrudComponent;
  let fixture: ComponentFixture<ExperienceCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperienceCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
