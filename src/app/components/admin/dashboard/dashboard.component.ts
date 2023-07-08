import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Variáveis
  grafico: Chart = new Chart();

  ngOnInit(): void {
    
    var dados = [['Estoque A', -100], ['Estoque B', 200], ['Estoque C', 150], ['Estoque D', 250]];
    var nomes = ['Estoque Modelo A', 'Estoque Modelo B', 'Estoque Modelo C', 'Estoque Modelo E'];

    this.grafico = new Chart({
      chart: { type: 'column' },
      title: { text: 'Controle de estoques' },
      subtitle: { text: 'Demonstrativo de controle de estoques' },
      series: [{ data: dados, negativeColor: 'red', type: undefined as any }],
      xAxis: { categories: nomes },
      legend: { enabled: false },
      credits: { enabled: false }
    });

  }

}
