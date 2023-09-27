import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Agendamento } from '../shared/model/Agendamento';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private apiService: ApiServiceService) { }

  public agendamentos: Agendamento[] = [];

  ngOnInit() {
    this.buscarInformacoesAgendamentos();
  }

  public buscarInformacoesAgendamentos(): void{
    this.apiService.getAllAgendamentos().subscribe((dados: Agendamento[]) => {
      this.agendamentos = dados;
      console.log(this.agendamentos);
    })
  }

}
