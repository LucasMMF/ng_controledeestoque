import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/account/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { EstoqueCadastroComponent } from './components/admin/estoque-cadastro/estoque-cadastro.component';
import { EstoqueConsultaComponent } from './components/admin/estoque-consulta/estoque-consulta.component';
import { RoutingModule } from './app.routing';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EstoqueCadastroComponent,
    EstoqueConsultaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Formulários reativos
    ReactiveFormsModule, // Formulários reativos
    RoutingModule, // Configuração do módulo de rotas
    MaterialModule // Configuração do módulo do material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
