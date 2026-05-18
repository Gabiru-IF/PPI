import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calcular-media',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calcular-media.html',
  styleUrls: ['./calcular-media.scss'],
})
export class Media {

  public mediaParcial: number | undefined
  public mediaFinal: number | undefined
  public situacao: string | undefined
  
  constructor() {
    this.mediaParcial = undefined
  }
  

  CalcularMediaParcial(b1: number, b2: number, 
                       b3: number, b4: number) {
      this.mediaParcial = 
        (b1 * 2 + b2 * 2 + b3 * 3 + b4 * 3) / 10

      if (this.mediaParcial >= 6) {
        this.mediaFinal = this.mediaParcial
        this.situacao = "Aprovado"
      }
  }

  calcularMediaFinal(exame: number) {
    if (this.mediaParcial !== undefined && exame !== undefined && this.mediaParcial < 6) {
      this.mediaFinal = (this.mediaParcial + exame) / 2
    }else {
      this.mediaFinal = this.mediaParcial
    }

    if (this.mediaFinal !== undefined) {
      if (this.mediaFinal >= 6) {
        this.situacao = "Aprovado"
      } else {
        this.situacao = "Reprovado"
      }
    }
  }

  limparCampos() {
    this.mediaParcial = undefined
    this.mediaFinal = undefined
    this.situacao = undefined
  }
}