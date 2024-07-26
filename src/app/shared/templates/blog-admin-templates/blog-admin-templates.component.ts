import { Component } from '@angular/core';
import { BlogAdminFormComponent } from '../../organism/blog-admin-form/blog-admin-form.component';

@Component({
  selector: 'app-blog-admin-templates',
  standalone: true,
  imports: [BlogAdminFormComponent],
  templateUrl: './blog-admin-templates.component.html',
  styleUrl: './blog-admin-templates.component.scss'
})
export class BlogAdminTemplatesComponent {

}
