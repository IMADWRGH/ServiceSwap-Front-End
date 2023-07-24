import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../model/service.module';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private APiUrl = "http://localhost:8080/api/services";
  constructor(private Http: HttpClient) { }


  getAllServices(): Observable<Service[]> {
    return this.Http.get<Service[]>(this.APiUrl);
  }

  getServiceById(id: number): Observable<Service> {
    return this.Http.get<Service>(`${this.APiUrl}/${id}`);
  }
}
