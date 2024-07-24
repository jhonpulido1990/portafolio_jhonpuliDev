import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTemplatesComponent } from './blog-templates.component';

describe('BlogTemplatesComponent', () => {
  let component: BlogTemplatesComponent;
  let fixture: ComponentFixture<BlogTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
