import { Component } from '@angular/core';
import { HeaderComponent } from '../../organism/header/header.component';

@Component({
  selector: 'app-header-templates',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header-templates.component.html',
  styleUrl: './header-templates.component.scss'
})
export class HeaderTemplatesComponent {

}
