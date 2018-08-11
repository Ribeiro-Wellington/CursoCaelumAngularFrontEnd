import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { Foto } from '../foto/foto.model';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styles: []
})
export class ListagemComponent implements OnInit {

  listafotos:Foto[];

  constructor(private servico: FotoService){
    console.log('Construtor do para buscar dados do serviço');

      this.servico.listar()
              .subscribe(
                (fotosApi) => {
                  this.listafotos = fotosApi;
                }
              )
  }

  ngOnInit() {
  }

  Apagar(fotoApagada: Foto){
    this.servico.deletar(fotoApagada)
                .subscribe(
                  () => {console.log("Apagou",fotoApagada)

                  this.listafotos = this.listafotos
                                        .filter(foto => {
                                          if(foto != fotoApagada){
                                             return foto 
                                          }
                                        })
                },
                erro => console.log("Deu Ruim: ", erro)
                )
  }
}
