import { Component } from '@angular/core';
import { Veiculo } from '../shared/model/Veiculo';
import { ApiServiceService } from '../api-service.service';
import { Cliente } from '../shared/model/Cliente';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private apiService: ApiServiceService) {}

  public veiculos: Veiculo[] = [];

  public clientes: Cliente[] = [];

  public isModalAdicionarVeiculoOpen: boolean = false;

  public clienteSelecionadoId: number | undefined;

  public marcaDoVeiculoParaSerAdicionado: String | undefined;

  public modeloDoVeiculoParaSerAdicionado: String | undefined;

  public anoDoVeiculoParaSerAdicionado: number | undefined;

  public placaDoVeiculoParaSerAdicionado: String | undefined;

  public formularioAdicionarNovoVeiculo: Veiculo = new Veiculo();

  ngOnInit(): void{
    this.buscarInformacoesVeiculos();
    this.buscarInformarcoesClientes();
  }

  public buscarInformacoesVeiculos(): void{
    this.apiService.getAllVeiculos().subscribe((dados: Veiculo[]) => {
      this.veiculos = dados;
    })
  }

  public buscarInformarcoesClientes(): void{
    this.apiService.getAllClientes().subscribe((dados: Cliente[]) => {
      this.clientes = dados;
    })
  }

  public setOpenModalAdicionarVeiculo(isOpen: boolean): void{
    this.isModalAdicionarVeiculoOpen = isOpen;
  }

  public adicionaNovoVeiculo(): void{
    this.formularioAdicionarNovoVeiculo.marca = this.marcaDoVeiculoParaSerAdicionado;
    this.formularioAdicionarNovoVeiculo.modelo = this.modeloDoVeiculoParaSerAdicionado;
    this.formularioAdicionarNovoVeiculo.ano = this.anoDoVeiculoParaSerAdicionado
    this.formularioAdicionarNovoVeiculo.placa = this.placaDoVeiculoParaSerAdicionado;
    this.formularioAdicionarNovoVeiculo.clienteId = this.clienteSelecionadoId;

    this.apiService.postCreateVeiculo(this.formularioAdicionarNovoVeiculo).subscribe(() => {
      console.log("Veiculo Adicionado Com Sucesso");
      this.setOpenModalAdicionarVeiculo(false);
      this.buscarInformacoesVeiculos();
    },
     ()=> {
      console.log("Erro ao adicionar veiculo");
      console.log(this.formularioAdicionarNovoVeiculo);
     })
  }

}
