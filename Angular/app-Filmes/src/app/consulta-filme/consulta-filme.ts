import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilmeService } from '../filme-service';
import { Filme } from './filme';

@Component({
  selector: 'app-consulta-filme',
  imports: [FormsModule],
  templateUrl: './consulta-filme.html',
  styleUrl: './consulta-filme.scss',
})
export class ConsultaFilme {
  #filmeService = inject(FilmeService)
  protected termoBusca = ''
  protected filmes = signal<Filme[]>([])
  protected mensagem = signal('Digite um titulo para pesquisar filmes.')
  protected carregando = signal(false)

  buscarFilmes() {
    const titulo = this.termoBusca.trim()

    if (!titulo) {
      this.filmes.set([])
      this.mensagem.set('Informe um titulo para buscar.')
      return
    }

    this.carregando.set(true)
    this.mensagem.set('')

    this.#filmeService.obterFilmes(titulo).subscribe({
      next: (res) => {
        if (res.Response === 'True' && res.Search?.length) {
          this.filmes.set(res.Search)
          this.mensagem.set('')
        } else {
          this.filmes.set([])
          this.mensagem.set(res.Error ?? 'Nenhum filme encontrado.')
        }
      },
      error: () => {
        this.filmes.set([])
        this.mensagem.set('Nao foi possivel consultar a API no momento.')
      },
      complete: () => {
        this.carregando.set(false)
      }
    })
  }
}
