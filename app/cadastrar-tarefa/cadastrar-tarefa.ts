import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../tarefa-service';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-cadastrar-tarefa',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './cadastrar-tarefa.html',
  styleUrl: './cadastrar-tarefa.css',
})
export class CadastrarTarefa {

  titulo = '';
  autor  = '';
  prazo: number | null = null;

  constructor(private service: TarefaService) {}

  salvar() {
    if (!this.titulo.trim() || !this.autor.trim() || !this.prazo) return;
    this.service.adicionar({
      id: 0,
      titulo: this.titulo.trim(),
      prazo: this.prazo,
      concluida: false
    });
    this.titulo = ''; this.prazo = null; '';
  }

}
