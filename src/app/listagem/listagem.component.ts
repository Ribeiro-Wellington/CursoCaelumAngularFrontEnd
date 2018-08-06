import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listafotos;

  constructor(servico: FotoService){
    console.log('Construtor do para buscar dados do serviço');

      servico.listar()
              .subscribe(
                (fotosApi) => {
                  this.listafotos = fotosApi;
                }
              )
  }

  ngOnInit() {
  }

}
