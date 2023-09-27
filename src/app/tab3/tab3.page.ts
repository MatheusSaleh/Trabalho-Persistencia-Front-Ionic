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

  ngOnInit(): void{
    this.buscarInformacoesServicos();
  }


  public buscarInformacoesServicos(): void{
    this.apiService.getAllServicos().subscribe((dados: Servico[]) => {
      this.servicos = dados;
    })
  }
}
