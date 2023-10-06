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

  public isModalEditarClienteOpen: boolean = false;

  public clienteSelecionadoParaEditar: Cliente = new Cliente();

  public novoNomeDoClienteAposEdicao: string = "";

  public novoEmailDoClienteAposEdicao: string = "";

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

  public setOpenModalEditarCliente(isOpen: boolean, clienteSelecionado: Cliente): void{

    this.isModalEditarClienteOpen = isOpen;
    this.clienteSelecionadoParaEditar = clienteSelecionado;
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
        console.log("Cliente excluido com sucesso!");
        this.setOpenModalExcluirCliente(false, this.clienteSelecionadoParaExcluir);
        this.buscarInformacoesClientes();
      },
      ()=>{
        console.log("Erro ao excluir cliente");
      })
  }

  public editarCliente(): void{
    this.clienteSelecionadoParaEditar.nome = this.novoNomeDoClienteAposEdicao;
    this.clienteSelecionadoParaEditar.email = this.emailCliente;

    this.apiService.updateCliente(this.clienteSelecionadoParaEditar).subscribe(
      ()=>{
        console.log("Cliente editado com sucesso!");
        this.setOpenModalEditarCliente(false, this.clienteSelecionadoParaEditar);
        this.buscarInformacoesClientes();
      }
    )
  }
}
