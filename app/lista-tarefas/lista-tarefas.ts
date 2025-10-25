import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarefa, TarefaService } from '../tarefa-service';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-lista-tarefas',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css',
})
export class ListaTarefas {

  Tarefas: Tarefa[] = [];

  constructor(private srv: TarefaService) {
    this.Tarefas = this.srv.listar();
  }

  remover(id: number) {
    this.srv.remover(id);
  }

}
