import { Component, inject, OnInit, signal } from '@angular/core';
import { BlogDto } from '../../../core/model/interface/blog.interface';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../../core/service/blog.service';

@Component({
  selector: 'app-blog-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog-work.component.html',
  styleUrl: './blog-work.component.scss',
})
export class BlogWorkComponent implements OnInit {
  public blogs = signal<BlogDto[]>([]);
  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.loadProject();
  }

  loadProject() {
    this.blogService.getAllBlogs().subscribe({
      next: (blog) => {
        this.blogs.set(blog);
        /* console.log(blog); */
      },
      error: () => {
        this.blogs.set([])
      }
    })
  }

  articles: BlogDto[] = [
    {
      title: 'Introducción a Angular 16+',
      description:
        'Un tutorial paso a paso sobre cómo empezar con Angular 16+, incluyendo la configuración del entorno de desarrollo y la creación de tu primer componente.',
      link: 'https://example.com/angular-tutorial',
      date: '2024-01-01',
    },
    {
      title: 'Mejores Prácticas para el Desarrollo Full Stack',
      description:
        'Consejos y trucos para mejorar tu flujo de trabajo y la calidad de tu código al desarrollar aplicaciones full stack.',
      link: 'https://example.com/full-stack-best-practices',
      date: '2024-02-15',
    },
    {
      title: 'Cómo Optimizar el Rendimiento de Aplicaciones Web',
      description:
        'Técnicas y estrategias para optimizar el rendimiento de tus aplicaciones web, incluyendo lazy loading, caching, y más.',
      link: 'https://example.com/web-performance-optimization',
      date: '2024-03-10',
    },
  ];
}
