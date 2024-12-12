import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Icarrinho } from '../model/services/icarrinho';
import { CarrinhoService } from '../model/services/carrinho.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  providers: [CarrinhoService],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private carrinhoService: CarrinhoService) {}

  // Exibir mensagem de confirmação para remover item
  private confirmRemoveItem(itemId: number): void {
    Swal.fire({
      title: 'Tem certeza?',
      text: "Você não poderá recuperar este item depois de removê-lo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, remover!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carrinhoService.deleteCarrinhoItem(itemId).subscribe(() => {
          Swal.fire(
            'Removido!',
            'O item foi removido do carrinho.',
            'success'
          );
          this.showCarrinhoAlert(); // Atualiza o modal após a remoção
        });
      }
    });
  }

  // Exibir mensagem de confirmação para finalizar a compra
  private finalizePurchase(): void {
    Swal.fire({
      title: 'Confirmação de Compra',
      text: "Você tem certeza que deseja finalizar a compra? Todos os itens serão removidos.",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, finalizar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.carrinhoService.getCarrinhoItem().subscribe((items: Icarrinho[]) => {
          items.forEach(item => {
            this.carrinhoService.deleteCarrinhoItem(item.id).subscribe();
          });
          Swal.fire(
            'Compra Finalizada!',
            'Você finalizou sua compra. Seu pedido será entregue em breve!',
            'success'
          );
        });
      }
    });
  }

  // Método principal para exibir o carrinho e opções
  showCarrinhoAlert(): void {
    this.carrinhoService.getCarrinhoItem().subscribe((carrinhoItems: Icarrinho[]) => {
      if (carrinhoItems.length === 0) {
        Swal.fire({
          icon: 'info',
          title: 'Carrinho Vazio',
          text: 'Seu carrinho está vazio. Adicione itens para prosseguir.',
          confirmButtonText: 'Ok'
        });
        return;
      }

      // Gerar o HTML dos itens com botões de remoção
      const itemsHtml = carrinhoItems.map(item => `
        <div class="flex shadow-lg mb-4 bg-[#f0f0f0] rounded items-center p-4 border-b border-gray-300">
          <img src="${item.img}" alt="${item.alt}" class="w-32 h-auto rounded-md mr-4" />
          <div class="flex-1">
            <h5 class="text-left text-lg font-semibold mb-1">${item.title}</h5>
            <p class="text-left text-sm mb-1">${item.description}</p>
            <p class="text-left text-sm mb-1">Quantidade: ${item.quantity}</p>
            <p class="text-left text-sm">Preço: R$${item.value.toFixed(2)}</p>
          </div>
          <button id="remove-btn-${item.id}" class="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"><img src="./assets/trash-fill.svg" alt="ícone de remover"></button>
        </div>
      `).join('');

      const totalValue = carrinhoItems.reduce((total, item) => total + item.totalValue, 0);

      // Exibir o SweetAlert2 com a função de remoção e botão para finalizar a compra
      Swal.fire({
        title: 'Itens no Carrinho',
        html: `<div class="max-h-96 overflow-y-auto">
          ${itemsHtml}
          <p class="text-3xl font-semibold text-left mt-4">Total: R$${totalValue.toFixed(2)}</p>
        </div>`,
        showCancelButton: true,
        cancelButtonText: 'Fechar',
        confirmButtonText: 'Finalizar Compra',
        didOpen: () => {
          carrinhoItems.forEach(item => {
            const removeButton = document.getElementById(`remove-btn-${item.id}`);
            if (removeButton) {
              removeButton.addEventListener('click', () => this.confirmRemoveItem(item.id));
            }
          });

          const finalizeButton = Swal.getConfirmButton();
          if (finalizeButton) {
            finalizeButton.addEventListener('click', () => this.finalizePurchase());
          }
        }
      });
    });
  }
}
