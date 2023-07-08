import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { EstoquesPostRequestModel } from 'src/app/models/estoques-post.request.model';
import { postEstoque } from 'src/app/services/estoques.service';

@Component({
  selector: 'app-estoque-cadastro',
  templateUrl: './estoque-cadastro.component.html',
  styleUrls: ['./estoque-cadastro.component.css']
})
export class EstoqueCadastroComponent {

  // Variáveis
  mensagem: string = '';

  constructor(
    private spinner: NgxSpinnerService
  ){
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    descricao: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  get form(): any {
    return this.formCadastro.controls;
  }

  onSubmit(): void {

    this.spinner.show();
    const request = new EstoquesPostRequestModel(
      this.formCadastro.value.nome as string,
      this.formCadastro.value.descricao as string
    );

    postEstoque(request)
      .subscribe({
        next: (data) => {
          this.mensagem = `Estoque '${data.nome}', cadastrado com sucesso.`;
          this.formCadastro.reset();
        },
        error: (e) => {
          this.mensagem = 'Falha ao cadastrar o estoque';
          console.log(e.error);
        }
      })
      .add(() => {
        this.spinner.hide();
      });

  }

}
