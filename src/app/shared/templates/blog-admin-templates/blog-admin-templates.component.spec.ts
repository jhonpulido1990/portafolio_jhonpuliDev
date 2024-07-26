import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminTemplatesComponent } from './blog-admin-templates.component';

describe('BlogAdminTemplatesComponent', () => {
  let component: BlogAdminTemplatesComponent;
  let fixture: ComponentFixture<BlogAdminTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogAdminTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogAdminTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
