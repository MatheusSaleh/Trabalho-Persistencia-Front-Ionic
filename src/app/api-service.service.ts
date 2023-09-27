import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './shared/model/Cliente';
import { Veiculo } from './shared/model/Veiculo';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = 'http://localhost:3333'

  constructor(private http: HttpClient) { }

  public getAllClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiUrl}/clientes`);
  }

  public getAllVeiculos(): Observable<Veiculo[]>{
    return this.http.get<Veiculo[]>(`${this.apiUrl}/veiculos`);
  }
}
