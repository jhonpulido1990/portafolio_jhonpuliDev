import { Component } from '@angular/core';
import { AboutTemplatesComponent } from '../../shared/templates/about-templates/about-templates.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AboutTemplatesComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
