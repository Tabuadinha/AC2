import { Injectable } from '@angular/core';

export interface Tarefa {

  id: number;
  titulo: string;
  prazo: number;
  concluida: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  
  private _tarefas: Tarefa[] = [];

  listar(): Tarefa[] {
    return this._tarefas;
  }

  private nextId(): number {
    return Date.now();
  }
  
  adicionar(t: Tarefa): void {
    this._tarefas.push(t);
  }

  remover(id: number): void {
    const i = this._tarefas.findIndex(t => t.id === id);
    if (i >= 0) this._tarefas.splice(i, 1);
  }

  marcarConcluida(id: number) {
    const tarefa = this._tarefas.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = true;
      
    }
  }

}
  
