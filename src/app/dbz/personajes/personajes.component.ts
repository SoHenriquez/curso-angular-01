import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  //importamos el array de tipo Personaje que contiene objetos de interface Personaje
  @Input()
  personajes: Personaje [] = []

  borrarPersonaje() {
    if(this.personajes.length > 0) {
      this.personajes.pop();
    }
    
  }
}
