import { Component } from '@angular/core';
import { BlogTemplatesComponent } from '../../shared/templates/blog-templates/blog-templates.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogTemplatesComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
