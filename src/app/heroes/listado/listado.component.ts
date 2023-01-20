import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = 
  ['Ironman', 'Spiderman','Thor','Saitama', 'Tenma', 'Goku'];
  heroesBorrados: string []= [] ;

  borrarHeroe() {
    if(this.heroes.length > 0) {
      this.heroesBorrados.push( this.heroes.shift() || '');
    }
    
  }
}
