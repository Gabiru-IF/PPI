import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  standalone: true,
  imports: [],
  templateUrl: './calcular-media.html',
  styleUrl: './calcular-media.scss',
})
export class Media {

  media: number = 0

  constructor() {}
  
  CalcularMedia(nota1: number, nota2: number, nota3: number, nota4: number) {
    this.media = (nota1 + nota2 + nota3 + nota4) / 4
  }

}
