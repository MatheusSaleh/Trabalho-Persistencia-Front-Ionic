import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './shared/model/Cliente';
import { Veiculo } from './shared/model/Veiculo';
import { Servico } from './shared/model/Servico';
import { Agendamento } from './shared/model/Agendamento';

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

  public getAllServicos(): Observable<Servico[]>{
    return this.http.get<Servico[]>(`${this.apiUrl}/servicos`);
  }

  public atualizarSituacaoDoServico(servico: Servico): Observable<Servico> {
    return this.http.put<Servico>(`${this.apiUrl}/atualizar-situacao-do-servico/${servico.id}`, servico);
  }

  public deleteServico(servico: Servico): Observable<Servico>{
    return this.http.delete<Servico>(`${this.apiUrl}/servicos/${servico.id}`);
  }

  public getAllAgendamentos(): Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(`${this.apiUrl}/agendamentos`);
  }

  public postCreateCliente(formulario: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiUrl}/clientes`, formulario)
  }

  public deleteCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.delete<Cliente>(`${this.apiUrl}/clientes/${cliente.id}`)
  }

  public postCreateVeiculo(formulario: Veiculo): Observable<Veiculo>{
    return this.http.post<Veiculo>(`${this.apiUrl}/veiculos`, formulario)
  }

  public updateCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.apiUrl}/clientes/${cliente.id}`, cliente)
  }

}
