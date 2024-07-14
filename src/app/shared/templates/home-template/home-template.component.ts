import { Component } from '@angular/core';
import { PerfilComponent } from '../../organism/perfil/perfil.component';

@Component({
  selector: 'app-home-template',
  standalone: true,
  imports: [PerfilComponent],
  templateUrl: './home-template.component.html',
  styleUrl: './home-template.component.scss'
})
export class HomeTemplateComponent {

}
