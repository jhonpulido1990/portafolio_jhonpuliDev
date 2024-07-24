import { Component } from '@angular/core';
import { ContactsTemplatesComponent } from '../../shared/templates/contacts-templates/contacts-templates.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ContactsTemplatesComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
