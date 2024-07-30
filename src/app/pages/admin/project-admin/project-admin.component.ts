import { Component } from '@angular/core';
import { ProjectsAdminTemplatesComponent } from '../../../shared/templates/projects-admin-templates/projects-admin-templates.component';

@Component({
  selector: 'app-project-admin',
  standalone: true,
  imports: [ProjectsAdminTemplatesComponent],
  templateUrl: './project-admin.component.html',
  styleUrl: './project-admin.component.scss'
})
export class ProjectAdminComponent {

}
