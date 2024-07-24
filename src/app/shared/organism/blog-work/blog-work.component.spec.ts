import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogWorkComponent } from './blog-work.component';

describe('BlogWorkComponent', () => {
  let component: BlogWorkComponent;
  let fixture: ComponentFixture<BlogWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogWorkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlogWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
