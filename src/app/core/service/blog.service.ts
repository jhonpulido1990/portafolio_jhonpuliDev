import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { BlogDto } from '../model/interface/blog.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl + '/blog';

  // Obtener todos los blogs
  getAllBlogs(): Observable<BlogDto[]> {
    return this.http.get<BlogDto[]>(this.baseUrl).pipe(
      map((blogs) => {
        return blogs;
      })
    )
  }

  // Obtener un blog por ID
  getOneBlog(id: string): Observable<BlogDto> {
    return this.http.get<BlogDto>(`${this.baseUrl}/${id}`);
  }

  // crear un blog
  createBlog(blogDto: BlogDto): Observable<BlogDto> {
    return this.http.post<BlogDto>(this.baseUrl, blogDto);
  }

  // Actualizar un blog existente
  updateBlog(id: string, blogDto: Partial<BlogDto>): Observable<BlogDto> {
    return this.http.put<BlogDto>(`${this.baseUrl}/${id}`, blogDto);
  }

  // Eliminar un blog existente
  deleteBlog(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
