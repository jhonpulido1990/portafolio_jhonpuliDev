import { Component } from '@angular/core';
import { ProjectsTemplatesComponent } from '../../shared/templates/projects-templates/projects-templates.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ ProjectsTemplatesComponent ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
