import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [

        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 14000
        }
      ];
    
    //Con el Getter Retornamos un nuevo array basado en _personajes
    get personajes( ): Personaje[] {
        return [...this._personajes];
    }
    constructor() {
        console.log('::inicializado...');
    }

    agregarPersonaje ( data: Personaje ) {
        this._personajes.push( data );
    }
}