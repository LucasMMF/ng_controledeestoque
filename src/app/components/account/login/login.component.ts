import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/models/login.request.model';
import { postLogin } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Construtor
  constructor(
    private router: Router // Manipulação das rotas
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

    // Dados da requisição
    const request = new LoginRequest(
      this.formLogin.value.username as string,
      this.formLogin.value.password as string
    );

    // Chamada para a API
    postLogin(request)
    .subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => {
        console.log(e.error);
      }
    });

  }

}
