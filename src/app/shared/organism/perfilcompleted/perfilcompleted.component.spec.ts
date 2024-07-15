import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilcompletedComponent } from './perfilcompleted.component';

describe('PerfilcompletedComponent', () => {
  let component: PerfilcompletedComponent;
  let fixture: ComponentFixture<PerfilcompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilcompletedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PerfilcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
