import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTemplatesComponent } from './about-templates.component';

describe('AboutTemplatesComponent', () => {
  let component: AboutTemplatesComponent;
  let fixture: ComponentFixture<AboutTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
