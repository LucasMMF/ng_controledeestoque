import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./components/account/login/login.component";
import { DashboardComponent } from "./components/admin/dashboard/dashboard.component";
import { EstoqueCadastroComponent } from "./components/admin/estoque-cadastro/estoque-cadastro.component";
import { EstoqueConsultaComponent } from "./components/admin/estoque-consulta/estoque-consulta.component";
import { EstoqueEdicaoComponent } from "./components/admin/estoque-edicao/estoque-edicao.component";
import { SignInGuard } from "./guards/signin.guard";

const routes: Routes = [
    {
        path: 'account/login',
        component: LoginComponent
    },
    {
        path: 'admin/dashboard',
        component: DashboardComponent,
        canActivate: [SignInGuard]
    },
    {
        path: 'admin/estoque-cadastro',
        component: EstoqueCadastroComponent,
        canActivate: [SignInGuard]
    },
    {
        path: 'admin/estoque-consulta',
        component: EstoqueConsultaComponent,
        canActivate: [SignInGuard]
    },
    {
        path: 'admin/estoque-edicao/:id',
        component: EstoqueEdicaoComponent,
        canActivate: [SignInGuard]
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
