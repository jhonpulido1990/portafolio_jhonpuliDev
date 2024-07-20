import { Component } from '@angular/core';
import { ExperienceTemplatesComponent } from '../../shared/templates/experience-templates/experience-templates.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ExperienceTemplatesComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

}
