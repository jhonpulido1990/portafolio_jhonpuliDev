import { Component } from '@angular/core';
import { ProjectListComponent } from '../../organism/project-list/project-list.component';

@Component({
  selector: 'app-projects-templates',
  standalone: true,
  imports: [ ProjectListComponent ],
  templateUrl: './projects-templates.component.html',
  styleUrl: './projects-templates.component.scss'
})
export class ProjectsTemplatesComponent {

}
