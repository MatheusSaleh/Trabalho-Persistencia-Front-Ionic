import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Servico } from '../shared/model/Servico';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private apiService: ApiServiceService) {}

  public servicos: Servico[] = [];

  public isModalAtualizarSituacaoDoServicoOpen: boolean = false;

  public isModalExcluirServicoOpen: boolean = false;

  public servicoSelecionadoParaAtualizarSituacao: Servico = new Servico();

  public servicoSelecionadoParaDeletar: Servico = new Servico();

  ngOnInit(): void{
    this.buscarInformacoesServicos();
  }

  public buscarInformacoesServicos(): void{
    this.apiService.getAllServicos().subscribe((dados: Servico[]) => {
      this.servicos = dados;
      console.log(dados)
    })
  }

  public setOpenModalAtualizarSituacaoDoServico(isOpen: boolean, servicoSelecionado: Servico): void{
    this.isModalAtualizarSituacaoDoServicoOpen = isOpen;
    this.servicoSelecionadoParaAtualizarSituacao = servicoSelecionado;
  }

  public setOpenModalExcluirServico(isOpen: boolean, servicoSelecionado: Servico): void{
    this.isModalExcluirServicoOpen = isOpen;
    this.servicoSelecionadoParaDeletar = servicoSelecionado;
  }

  public atualizarSituacaoDoServico(): void{
    this.apiService.atualizarSituacaoDoServico(this.servicoSelecionadoParaDeletar).subscribe(() => {
      console.log("Serviço marcado como concluido com sucesso");
      this.setOpenModalAtualizarSituacaoDoServico(false, this.servicoSelecionadoParaAtualizarSituacao);
      this.buscarInformacoesServicos();
    }, ()=> {
      console.log("Erro ao atualizar situação do serviço")
    })
  }

  public deletarServico(): void {
    console.log(this.servicoSelecionadoParaDeletar);
    this.apiService.deleteServico(this.servicoSelecionadoParaAtualizarSituacao).subscribe(() => {
      console.log("Serviço excluido com sucesso");
      this.setOpenModalExcluirServico(false, this.servicoSelecionadoParaDeletar);
      this.buscarInformacoesServicos();
    }, () => {
      console.log("Erro ao excluir serviço");
    })
  }

}
