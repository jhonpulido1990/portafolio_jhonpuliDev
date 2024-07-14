import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTemplatesComponent } from './footer-templates.component';

describe('FooterTemplatesComponent', () => {
  let component: FooterTemplatesComponent;
  let fixture: ComponentFixture<FooterTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
