import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Cliente } from '../shared/model/Cliente';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private apiService: ApiServiceService) {}

  public clientes: Cliente[] = [];

  ngOnInit(): void {
    this.buscarInformacoesClientes();
  }

  public buscarInformacoesClientes(): void {
    this.apiService.getAllClientes().subscribe((dados: Cliente[]) => {
      this.clientes = dados;
    });
  }
}
