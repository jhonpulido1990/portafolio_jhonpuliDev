import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { ProjectList } from '../model/interface/product-list.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl + '/project';

  // Obtener todos los projectos
  getAllProjects(): Observable<ProjectList[]> {
    return this.http.get<ProjectList[]>(this.baseUrl).pipe(
      map((projects) => {
        return projects;
      })
    )
  }

  // Obtener un projecto por ID
  getOneProject(id: string): Observable<ProjectList> {
    return this.http.get<ProjectList>(`${this.baseUrl}/${id}`);
  }

  // Crear un projecto
  createProject(project: ProjectList): Observable<ProjectList> {
    return this.http.post<ProjectList>(this.baseUrl, project);
  }

  // Actualizar un projecto existente
  updateProject(id: string, project: Partial<ProjectList>): Observable<ProjectList> {
    return this.http.put<ProjectList>(`${this.baseUrl}/${id}`, project);
  }

  // Eliminar un projecto existente
  deleteProject(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
