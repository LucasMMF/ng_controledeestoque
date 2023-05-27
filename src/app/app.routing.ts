import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/account/login/login.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { EstoqueCadastroComponent } from "./components/admin/estoque-cadastro/estoque-cadastro.component";
import { EstoqueConsultaComponent } from "./components/admin/estoque-consulta/estoque-consulta.component";

const routes: Routes = [
    {
        path: 'account/login',
        component: LoginComponent
    },
    {
        path: 'admin/dashboard',
        component: DashboardComponent
    },
    {
        path: 'admin/estoque-cadastro',
        component: EstoqueCadastroComponent
    },
    {
        path: 'admin/estoque-consulta',
        component: EstoqueConsultaComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/account/login'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
