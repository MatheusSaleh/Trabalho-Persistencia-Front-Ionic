import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://localhost:3333'

  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<any>{
    return this.http.get(`${this.apiUrl}/clientes`);
  }
}
