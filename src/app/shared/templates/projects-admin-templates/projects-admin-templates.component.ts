import { Component } from '@angular/core';
import { ProjectCrudComponent } from '../../organism/project-crud/project-crud.component';

@Component({
  selector: 'app-projects-admin-templates',
  standalone: true,
  imports: [ProjectCrudComponent],
  templateUrl: './projects-admin-templates.component.html',
  styleUrl: './projects-admin-templates.component.scss'
})
export class ProjectsAdminTemplatesComponent {

}
