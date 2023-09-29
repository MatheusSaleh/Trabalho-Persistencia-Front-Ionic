import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Cliente } from '../shared/model/Cliente';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private apiService: ApiServiceService) {}

  public clientes: Cliente[] = [];

  public isModalOpen: boolean = false;

  public nomeCliente: string = "";

  public emailCliente: string = "";

  public novoCliente: Cliente = new Cliente();

  ngOnInit(): void {
    this.buscarInformacoesClientes();
  }

  public buscarInformacoesClientes(): void {
    this.apiService.getAllClientes().subscribe((dados: Cliente[]) => {
      this.clientes = dados;
    });
  }

  public setOpen(isOpen: boolean): void {
    this.isModalOpen = isOpen;
  }

  public adicionaNovoCliente(): void{
    this.novoCliente.nome = this.nomeCliente;
    this.novoCliente.email = this.emailCliente;
    this.apiService.postCreateCliente(this.novoCliente).subscribe(() => {
      console.log("Cliente adicionado com sucesso!");
      this.setOpen(false);
      this.buscarInformacoesClientes();
    },
    (httpError: HttpErrorResponse)=> {
      console.log("Erro ao adicionar cliente!"+ httpError.error.message);
    })
  }
}
