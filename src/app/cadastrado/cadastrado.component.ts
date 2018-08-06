import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto.model';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'caelumpic-cadastrado',
  templateUrl: './cadastrado.component.html',
  styles: []
})
export class CadastradoComponent implements OnInit {

  foto = new Foto();

  constructor(private servico: FotoService) { }

  ngOnInit() { }

  salvar(){
    this.servico
        .cadastrar(this.foto)
        .subscribe(
          (resposta) => console.log('Salvou',resposta)
        )
  }

}
