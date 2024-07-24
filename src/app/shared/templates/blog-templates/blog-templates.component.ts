import { Component } from '@angular/core';
import { BlogWorkComponent } from '../../organism/blog-work/blog-work.component';

@Component({
  selector: 'app-blog-templates',
  standalone: true,
  imports: [BlogWorkComponent],
  templateUrl: './blog-templates.component.html',
  styleUrl: './blog-templates.component.scss'
})
export class BlogTemplatesComponent {

}
