import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { signIn } from 'src/app/helpers/auth.helper';
import { AutenticarRequestModel } from 'src/app/models/autenticar.request.model';
import { autenticar } from 'src/app/services/autenticar.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Atributo
  mensagem: string = '';

  // Construtor
  constructor(
    private router: Router, // Manipulação das rotas
    private spinner: NgxSpinnerService // ngx-spinner
  ) {
  }

  // Estrutura do formulário
  formLogin = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  // Objeto para acessar os campos do formulário
  get form(): any {
    return this.formLogin.controls;
  }

  // Função para processar o SUBMIT do formulário
  onSubmit() {

    this.spinner.show();

    // Dados da requisição
    const request = new AutenticarRequestModel(
      this.formLogin.value.username as string,
      this.formLogin.value.password as string
    );

    // Chamada para a API
    autenticar(request)
    .subscribe({
      next: (data) => {
        // Salvar os dados na local storage
        signIn(data);

        // Redirecionar para a página de dashboard
        this.router.navigate(['/admin/dashboard'])
        .then(() => {
          window.location.reload();
        });
      },
      error: (e) => {
        switch(e.response.status) {
          case 400:
            this.mensagem = "Ocorreram erros de validação no preenchimento do formulário";
            break;
          case 401:
            this.mensagem = e.response.data.mensagem;
            break;
        }
      }
    })
    .add(() => {
      this.spinner.hide();
    });

  }

}
