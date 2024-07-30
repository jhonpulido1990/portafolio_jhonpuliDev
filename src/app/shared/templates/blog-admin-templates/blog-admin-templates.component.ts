import { Component } from '@angular/core';
import { BlogCrudComponent } from '../../organism/blog-crud/blog-crud.component';

import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-blog-admin-templates',
  standalone: true,
  imports: [ BlogCrudComponent, AccordionModule ],
  templateUrl: './blog-admin-templates.component.html',
  styleUrl: './blog-admin-templates.component.scss'
})
export class BlogAdminTemplatesComponent {

}
