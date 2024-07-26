import { Component } from '@angular/core';
import { BlogAdminTemplatesComponent } from '../../../shared/templates/blog-admin-templates/blog-admin-templates.component';

@Component({
  selector: 'app-blog-admin',
  standalone: true,
  imports: [BlogAdminTemplatesComponent],
  templateUrl: './blog-admin.component.html',
  styleUrl: './blog-admin.component.scss'
})
export class BlogAdminComponent {

}
