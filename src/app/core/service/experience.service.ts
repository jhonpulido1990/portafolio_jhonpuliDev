import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { Job } from '../model/interface/experience.interface';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl + '/experience';

  // Obtener todas las experiencias
  getAllExperiences(): Observable<Job[]> {
    return this.http.get<Job[]>(this.baseUrl).pipe(
      map((experiences) => {
        return experiences;
      })
    );
  }

  // Obtener una experiencia por ID
  getOneExperience(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.baseUrl}/${id}`);
  }

  // Crear una experiencia
  createExperience(experience: Job): Observable<Job> {
    return this.http.post<Job>(this.baseUrl, experience);
  }

  // actualizar una experiencia existente
  updateExperience(id: string, experience: Partial<Job>): Observable<Job> {
    return this.http.put<Job>(`${this.baseUrl}/${id}`, experience);
  }

  // Eliminar una experiencia existente
  deleteExperience(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
