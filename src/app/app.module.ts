import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/account/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { EstoqueCadastroComponent } from './components/admin/estoque-cadastro/estoque-cadastro.component';
import { EstoqueConsultaComponent } from './components/admin/estoque-consulta/estoque-consulta.component';
import { RoutingModule } from './app.routing';
import { MaterialModule } from './app.material';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { EstoqueEdicaoComponent } from './components/admin/estoque-edicao/estoque-edicao.component';
import { MessagesComponent } from './components/shared/messages/messages.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EstoqueCadastroComponent,
    EstoqueConsultaComponent,
    NavbarComponent,
    EstoqueEdicaoComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, // Formulários reativos
    ReactiveFormsModule, // Formulários reativos
    RoutingModule, // Configuração do módulo de rotas
    MaterialModule, // Configuração do módulo do material
    NgxSpinnerModule, // Módulo do ngx-spinner
    ChartModule // Módulo do highcharts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
