import { ComponentsModule } from './../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FazendaRoutingModule } from './fazenda-routing.module';
import { ListarFazendaComponent } from './components/listar-fazenda/listar-fazenda.component';
import { CadastrarFazendaComponent } from './components/cadastrar-fazenda/cadastrar-fazenda.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    ListarFazendaComponent,
    CadastrarFazendaComponent,
  ],
  imports: [
    CommonModule,
    FazendaRoutingModule,
    ComponentsModule,
    ModalModule.forRoot()
  ]
})
export class FazendaModule { }
