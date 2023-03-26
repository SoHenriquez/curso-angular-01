import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //importamos el array de tipo Personaje que contiene objetos de interface Personaje
  // @Input()
  // personajes: Personaje [] = []

  constructor(private dbzService: DbzService) {

  }

  get personajes() {
    return this.dbzService.personajes;
  }
  
  borrarPersonaje() {
    if (this.personajes.length > 0) {
      this.personajes.pop();
    }

  }
}
