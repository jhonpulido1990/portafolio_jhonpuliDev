import { Component } from '@angular/core';
import { ExperienceAdminTemplatesComponent } from '../../../shared/templates/experience-admin-templates/experience-admin-templates.component';

@Component({
  selector: 'app-experience-admin',
  standalone: true,
  imports: [ExperienceAdminTemplatesComponent],
  templateUrl: './experience-admin.component.html',
  styleUrl: './experience-admin.component.scss'
})
export class ExperienceAdminComponent {

}
