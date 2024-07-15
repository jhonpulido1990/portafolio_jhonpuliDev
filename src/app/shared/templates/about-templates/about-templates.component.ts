import { Component } from '@angular/core';
import { PerfilcompletedComponent } from '../../organism/perfilcompleted/perfilcompleted.component';

@Component({
  selector: 'app-about-templates',
  standalone: true,
  imports: [PerfilcompletedComponent],
  templateUrl: './about-templates.component.html',
  styleUrl: './about-templates.component.scss'
})
export class AboutTemplatesComponent {

}
