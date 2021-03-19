import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
<h3>La base es: <strong> {{ base }} </strong></h3>

<button (click)="acumular(base)">+ {{ base }}</button>
<span>{{ numero }}</span>
<button (click)="acumular(base*-1)">- {{ base }}</button>
    `
})

export class ContadorComponent {
    titulo: string = 'ContadorApp';
    numero: number = 10;
    base: number = 4;

    acumular = (valor: number) => this.numero += valor;
}