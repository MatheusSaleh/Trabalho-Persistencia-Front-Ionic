import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Cliente } from '../shared/model/Cliente';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private apiService: ApiServiceService) {}

  public clientes: Cliente[] = [];

  public isModalAdicionarClienteOpen: boolean = false;

  public isModalExcluirClienteOpen: boolean = false;

  public nomeCliente: string = '';

  public emailCliente: string = '';

  public novoCliente: Cliente = new Cliente();

  public deuErroAoAdicionarCliente: boolean = false;

  public clienteSelecionadoParaExcluir: Cliente = new Cliente();

  ngOnInit(): void {
    this.buscarInformacoesClientes();
  }

  public buscarInformacoesClientes(): void {
    this.apiService.getAllClientes().subscribe((dados: Cliente[]) => {
      this.clientes = dados;
    });
  }

  public setOpenModalAdicionarCliente(isOpen: boolean): void {
    this.isModalAdicionarClienteOpen = isOpen;
  }

  public setOpenModalExcluirCliente(isOpen: boolean, clienteSelecionado: Cliente): void{
    this.isModalExcluirClienteOpen = isOpen;
    this.clienteSelecionadoParaExcluir = clienteSelecionado;
  }

  public adicionaNovoCliente(): void {
    this.novoCliente.nome = this.nomeCliente;
    this.novoCliente.email = this.emailCliente;

    if (
      this.novoCliente.nome.length == 0 &&
      this.novoCliente.email.length == 0
    ) {
      this.deuErroAoAdicionarCliente = true;
    } else {
      this.apiService.postCreateCliente(this.novoCliente).subscribe(
        () => {
          this.setOpenModalAdicionarCliente(false);
          this.buscarInformacoesClientes();
        },
        (httpError: HttpErrorResponse) => {
          console.log('Erro ao adicionar cliente!' + httpError.error.message);
        }
      );
    }
  }

  public excluirCliente(): void{
    this.apiService.deleteCliente(this.clienteSelecionadoParaExcluir).subscribe(
      ()=>{
        console.log("Cliente excluid com sucesso!");
        this.setOpenModalExcluirCliente(false, this.clienteSelecionadoParaExcluir);
        this.buscarInformacoesClientes();
      },
      ()=>{
        console.log("Erro ao excluir cliente");
      })
  }
}
