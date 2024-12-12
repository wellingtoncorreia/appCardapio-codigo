import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { menuItems } from '../data/menu-data';
import { Iitems } from './iitems';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: Iitems[] = menuItems;

 
  constructor() {}

  // Simula o método GET para obter todos os itens do menu
  getMenuItems(): Observable<any[]> {
    return of(this.menuItems);
  }

  // Simula o método POST para adicionar um novo item ao menu
  addMenuItem(item: any): Observable<any> {
    item.id = (this.menuItems.length + 1).toString(); // Gera um novo ID
    this.menuItems.push(item); // Adiciona o item ao array local
    return of(item); // Retorna o item adicionado
  }

  // Simula o método PUT para atualizar um item do menu
  updateMenuItem(id: number, updatedItem: any): Observable<any> {
    const index = this.menuItems.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.menuItems[index] = { ...this.menuItems[index], ...updatedItem };
      return of(this.menuItems[index]); // Retorna o item atualizado
    }
    return of(null); // Retorna null se o item não for encontrado
  }

  // Simula o método DELETE para remover um item do menu
  deleteMenuItem(id: number): Observable<any> {
    this.menuItems = this.menuItems.filter((item) => item.id !== id); // Remove o item
    return of({ success: true }); // Retorna uma resposta de sucesso
  }
}
