import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminFormComponent } from './blog-admin-form.component';

describe('BlogAdminFormComponent', () => {
  let component: BlogAdminFormComponent;
  let fixture: ComponentFixture<BlogAdminFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAdminFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
