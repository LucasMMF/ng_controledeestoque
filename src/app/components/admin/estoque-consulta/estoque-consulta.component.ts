import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque-consulta',
  templateUrl: './estoque-consulta.component.html',
  styleUrls: ['./estoque-consulta.component.css']
})
export class EstoqueConsultaComponent {

  // Construtor
  constructor(
    private router: Router
  ) {
  }

  // Nome das colunas do grid
  columnNames: string[] = ['nome', 'descricao', 'datacriacao', 'usuario', 'operacoes'];

  // Dados do grid
  dataSource = new MatTableDataSource<Estoque>([
    { nome: 'Estoque A', descricao: 'Estoque Modelo', datacriacao: new Date(), usuario: 'Usuário Teste' },
    { nome: 'Estoque B', descricao: 'Estoque Modelo', datacriacao: new Date(), usuario: 'Usuário Teste' },
    { nome: 'Estoque C', descricao: 'Estoque Modelo', datacriacao: new Date(), usuario: 'Usuário Teste' },
    { nome: 'Estoque D', descricao: 'Estoque Modelo', datacriacao: new Date(), usuario: 'Usuário Teste' }
  ]);

  // Função para exclusão
  onDelete(estoque: Estoque): void {
    if (window.confirm(`Deseja realmente excluir o estoque: '${estoque.nome}?'`)) {
      alert('Estoque excluído com sucesso.');
    }
  }

  // Função para edição
  onEdit(estoque: Estoque): void {
    this.router.navigate(['/admin/estoque-edicao', 1]);
  }

}

/*
  Modelo de dados
*/
class Estoque {
  nome: string = '';
  descricao: string = '';
  datacriacao: Date | null = null;
  usuario: string = '';
}
