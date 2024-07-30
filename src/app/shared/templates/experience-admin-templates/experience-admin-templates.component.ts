import { Component } from '@angular/core';
import { ExperienceCrudComponent } from '../../organism/experience-crud/experience-crud.component';

@Component({
  selector: 'app-experience-admin-templates',
  standalone: true,
  imports: [ExperienceCrudComponent],
  templateUrl: './experience-admin-templates.component.html',
  styleUrl: './experience-admin-templates.component.scss'
})
export class ExperienceAdminTemplatesComponent {

}
