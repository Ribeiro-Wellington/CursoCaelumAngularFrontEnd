import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { ListagemComponent } from './listagem/listagem.component';
import { CadastradoComponent } from './cadastrado/cadastrado.component';
import { ModuloRoteamento } from './app.routes';
import { ErroComponent } from './erro/erro.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListagemComponent,
    CadastradoComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpClientModule,
    ModuloRoteamento,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
