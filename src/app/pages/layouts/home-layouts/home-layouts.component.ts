import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTemplatesComponent } from '../../../shared/templates/header-templates/header-templates.component';
import { FooterTemplatesComponent } from '../../../shared/templates/footer-templates/footer-templates.component';

@Component({
  selector: 'app-home-layouts',
  standalone: true,
  imports: [ RouterOutlet, HeaderTemplatesComponent, FooterTemplatesComponent ],
  templateUrl: './home-layouts.component.html',
  styleUrl: './home-layouts.component.scss'
})
export class HomeLayoutsComponent {

}
