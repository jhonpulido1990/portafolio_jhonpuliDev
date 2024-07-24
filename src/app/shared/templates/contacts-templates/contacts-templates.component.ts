import { Component } from '@angular/core';
import { ContactFormComponent } from '../../organism/contact-form/contact-form.component';

@Component({
  selector: 'app-contacts-templates',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contacts-templates.component.html',
  styleUrl: './contacts-templates.component.scss'
})
export class ContactsTemplatesComponent {

}
