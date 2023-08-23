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


  getServices(name: string, city: string, type: string): Observable<Service[]> {
    return this.Http.get<Service[]>(`${this.APiUrl}/${name}/${city}/${type}`);
  }
  getAllServices(): Observable<Service[]> {
    return this.Http.get<Service[]>(this.APiUrl);
  }
  getData(): Observable<Service[]> {
    return this.Http.get<Service[]>(`${this.APiUrl}/${"data"}`);
  }
  getServiceById(id: number): Observable<Service> {
    return this.Http.get<Service>(`${this.APiUrl}/${id}`);
  }

  getServiceByType(type: string): Observable<Service[]> {
    return this.Http.get<Service[]>(`${this.APiUrl}/${type}`);
  }

  createService(service: Service): Observable<Service> {
    return this.Http.post<Service>(this.APiUrl, service);
  }

  updateService(id: number, service: Service): Observable<Service> {
    return this.Http.put<Service>(`${this.APiUrl}/${id}`, service);
  }

  deleteService(id: number): Observable<void> {
    return this.Http.delete<void>(`${this.APiUrl}/${id}`);
  }
}
