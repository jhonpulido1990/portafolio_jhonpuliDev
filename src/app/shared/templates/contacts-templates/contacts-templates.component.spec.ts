import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsTemplatesComponent } from './contacts-templates.component';

describe('ContactsTemplatesComponent', () => {
  let component: ContactsTemplatesComponent;
  let fixture: ComponentFixture<ContactsTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsTemplatesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
