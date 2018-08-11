import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto.model';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'caelumpic-cadastrado',
  templateUrl: './cadastrado.component.html',
  styles: []
})
export class CadastradoComponent implements OnInit {

  foto = new Foto();

  constructor(private servico: FotoService
              ,private rotaAtivada: ActivatedRoute
              ,private roteador: Router ) { }

  ngOnInit() {
    let fotoId = this.rotaAtivada.snapshot.params.fotoId
    if (fotoId){
      this.servico.pesquisar(fotoId)
                  .subscribe(
                    fotoApi => this.foto = fotoApi
                  )
    }
   }

  salvar(){
      if(this.foto._id){
        this.servico.atualizar(this.foto)
                                        .subscribe(
                                        () => { console.log(`${this.foto.titulo} atualizada com sucesso!`)
                                        this.roteador.navigate([''])
                                      }
        
                                    )
      }
      else {
        this.servico
            .cadastrar(this.foto)
            .subscribe(
              (resposta) => console.log('Salvou',resposta)
            )
      }
  }

}
