import { Component } from '@angular/core';
import { Veiculo } from '../shared/model/Veiculo';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private apiService: ApiServiceService) {}

  public veiculos: Veiculo[] = [];

  ngOnInit(): void{
    this.buscarInformacoesVeiculos();
  }

  public buscarInformacoesVeiculos(): void{
    this.apiService.getAllVeiculos().subscribe((dados: Veiculo[]) => {
      this.veiculos = dados;
      console.log(this.veiculos);
    })
  }

}
