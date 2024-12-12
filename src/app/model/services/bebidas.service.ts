import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { bebidasItems } from '../data/bebidas-data';
import { Iitems } from './iitems';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
  bebidasItems:Iitems[] = bebidasItems;

 
  constructor() {}

  // Simula o método GET para obter todos os itens do menu
  getbebidasItems(): Observable<any[]> {
    return of(this.bebidasItems);
  }

  // Simula o método POST para adicionar um novo item ao menu
  addBebidasItems(item: any): Observable<any> {
    item.id = (this.bebidasItems.length + 1).toString(); // Gera um novo ID
    this.bebidasItems.push(item); // Adiciona o item ao array local
    return of(item); // Retorna o item adicionado
  }

  // Simula o método PUT para atualizar um item do menu
  updateBebidasItems(id: number, updatedItem: any): Observable<any> {
    const index = this.bebidasItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.bebidasItems[index] = { ...this.bebidasItems[index], ...updatedItem };
      return of(this.bebidasItems[index]); // Retorna o item atualizado
    }
    return of(null); // Retorna null se o item não for encontrado
  }

  // Simula o método DELETE para remover um item do menu
  deleteBebidasItems(id: number): Observable<any> {
    this.bebidasItems = this.bebidasItems.filter((item) => item.id !== id); // Remove o item
    return of({ success: true }); // Retorna uma resposta de sucesso
  }
}
