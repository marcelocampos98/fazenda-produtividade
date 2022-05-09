import { CadastrarFazendaComponent } from './components/cadastrar-fazenda/cadastrar-fazenda.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFazendaComponent } from './components/listar-fazenda/listar-fazenda.component';

const routes: Routes = [{
  path: 'fazenda',
  children: [
    { path: 'listar', component: ListarFazendaComponent },
    { path: 'cadastrar', component: CadastrarFazendaComponent },
    { path: 'editar/:id', component: CadastrarFazendaComponent },
    { path: 'visualizar/:id', component: CadastrarFazendaComponent },
    { path: '', redirectTo: 'listar', pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FazendaRoutingModule { }
