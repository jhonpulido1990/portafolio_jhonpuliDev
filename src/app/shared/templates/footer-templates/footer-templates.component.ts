import { Component } from '@angular/core';
import { FooterComponent } from '../../organism/footer/footer.component';

@Component({
  selector: 'app-footer-templates',
  standalone: true,
  imports: [ FooterComponent ],
  templateUrl: './footer-templates.component.html',
  styleUrl: './footer-templates.component.scss'
})
export class FooterTemplatesComponent {

}
