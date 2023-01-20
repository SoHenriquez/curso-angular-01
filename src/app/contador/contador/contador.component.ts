import { Component } from "@angular/core";
@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ title }}</h1>
        <button (click)=" acumular(base)"> +{{base}} </button>

        <span>{{ num }}</span>

        <button (click)=" acumular(-base) "> -{{base}} </button>
        <br>
        <button (click)=" num = 0;"> 0 </button>
    `
})
export class ContadorComponent {

    title: string = 'Contador App';
    num  : number = 10;
    base : number = 5;
    acumular( valor: number){
      this.num += valor;
    }
}