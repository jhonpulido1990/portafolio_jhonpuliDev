import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private baseUrl = environment.apiUrl + '/mail/send';
  private http = inject(HttpClient);

  sendmail(data: { name: string, email: string, message: string }) {
    return this.http.post(this.baseUrl, data);
  }
}
