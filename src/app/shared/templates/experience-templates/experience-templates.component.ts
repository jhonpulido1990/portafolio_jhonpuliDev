import { Component } from '@angular/core';
import { ExperienceListComponent } from '../../organism/experience-list/experience-list.component';

@Component({
  selector: 'app-experience-templates',
  standalone: true,
  imports: [ExperienceListComponent],
  templateUrl: './experience-templates.component.html',
  styleUrl: './experience-templates.component.scss'
})
export class ExperienceTemplatesComponent {

}
