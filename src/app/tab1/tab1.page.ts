import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  clientes: any = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void{
    this.apiService.getAllClientes().subscribe((data) => {
      this.clientes = data;
      console.log(data);
    })
  }

}
