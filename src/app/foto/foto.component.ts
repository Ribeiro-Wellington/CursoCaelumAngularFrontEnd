import { Component, Input } from '@angular/core';

@Component({
    selector: 'foto-root',
    template: '<img [src]="url" [alt]="titulo" class="card-img-top">',
    styles: []
  })
  //<img src="assets/img/AngularLogo.png" alt="AngularLogo">
export class FotoComponent {
    @Input() url = '';
    @Input() titulo = '';
}