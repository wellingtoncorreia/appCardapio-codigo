import { CarrinhoService } from './../model/services/carrinho.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../model/services/menu.service';
import { BebidaService } from '../model/services/bebidas.service';
import { Icarrinho } from '../model/services/icarrinho';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  providers:[
    MenuService,
    BebidaService,
    CarrinhoService
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent implements OnInit{
  cartItemCount: number = 0;
  cartAdd = [];
  menuItems: any[] = [];
  bebidasItems: any[] = [];
  
  constructor( 
    private menuService: MenuService,
    private bebidaService:BebidaService,
    private carrinhoService:CarrinhoService
  ) {}

  ngOnInit(): void {
    this.getMenuItems();
    this. getBebidasItems();
  }

  getMenuItems(): void {
    this.menuService.getMenuItems().subscribe(
      (data: any[]) => (this.menuItems = data),
      (error: any) => console.error(error)
    );
  }
  
  getBebidasItems(): void {
    this.bebidaService.getbebidasItems().subscribe(
      (data: any[]) => (this.bebidasItems = data),
      (error: any) => console.error(error)
    );
  }

  // Método para adicionar o item ao carrinho
  addToCart(item: Icarrinho) {
    const carrinhoItem: Icarrinho = {
      id: 0, // O ID será gerado automaticamente pelo serviço
      img: item.img,
      alt: item.alt,
      title: item.title,
      value: item.value,
      quantity: 1, // Define a quantidade padrão como 1
      description: item.description,
      totalValue: 0
    };

    // Chama o serviço para adicionar o item ao carrinho
    this.carrinhoService.addCarrinhoItem(carrinhoItem).subscribe((itemAdicionado) => {
      Swal.fire({
        title: 'Item adicionado ao carrinho!',
        text: "Você adicionou um item no carrinho!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Continuar comprando',
      });
    });
  }
}
