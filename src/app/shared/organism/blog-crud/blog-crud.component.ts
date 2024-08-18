import { Component, inject, OnInit, signal } from '@angular/core';
import { BlogDto } from '../../../core/model/interface/blog.interface';
import { BlogService } from '../../../core/service/blog.service';

@Component({
  selector: 'app-blog-crud',
  standalone: true,
  imports: [],
  templateUrl: './blog-crud.component.html',
  styleUrl: './blog-crud.component.scss',
})
export class BlogCrudComponent implements OnInit {
  public listBlog = signal<BlogDto[]>([]);
  private blogService = inject(BlogService);
  isTableOpen = true;
  isFormOpen = false;

  ngOnInit(): void {
    this.loadProject();
  }

  loadProject() {
    this.blogService.getAllBlogs().subscribe({
      next: ((blogs) => {
        this.listBlog.set(blogs);
        console.log(blogs)
      }),
      error: () => {
        this.listBlog.set([]);
      }
    })
  }

  toggleSection(section: string): void {
    if (section === 'table' && !this.isTableOpen) {
      this.isTableOpen = !this.isTableOpen;
      this.isFormOpen = !this.isFormOpen;
    } else if (section === 'form' && !this.isFormOpen) {
      this.isTableOpen = !this.isTableOpen;
      this.isFormOpen = !this.isFormOpen;
    }
  }
}
