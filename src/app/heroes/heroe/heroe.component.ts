
import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})
export class HeroeComponent{
    nombreUser: string = "Esteban Soto";
    telUser   : number = 983293945;
    emailUser : string = "estebansotohenriquez@gmail.com";

    /* Sobre el Heroe */

    nombre: string = "Ironman";
    edad  : number = 45; 

    get nombreCapitalizado(){
        return this.nombreUser.toUpperCase();
    }
    obtenerNombre() {
        console.log('Función para obtener nombre');
        return `${ this.nombreUser } - ${ this.emailUser }`;
    }
    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }
    cambiarEdad(): void{
        this.edad = 30;
    }
}