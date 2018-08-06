import { Routes, RouterModule } from "@angular/router";
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastradoComponent } from "./cadastrado/cadastrado.component";
import { ErroComponent } from "./erro/erro.component";

const rotasApp:Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastradoComponent},
    {path: 'erro', component: CadastradoComponent},
    {path:'**', redirectTo: 'erro'}
]   

export const ModuloRoteamento = RouterModule.forRoot(rotasApp)