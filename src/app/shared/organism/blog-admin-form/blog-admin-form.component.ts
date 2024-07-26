import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionComponent } from '../../molecules/accordion/accordion.component';

@Component({
  selector: 'app-blog-admin-form',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './blog-admin-form.component.html',
  styleUrl: './blog-admin-form.component.scss'
})
export class BlogAdminFormComponent {

}
