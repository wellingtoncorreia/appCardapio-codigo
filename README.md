# Dev Burguer

Este é um projeto Angular para um sistema de gerenciamento de carrinho de compras e verificação de horário de funcionamento para um restaurante fictício chamado Dev Burguer.

## Funcionalidades

- **Gerenciamento de Carrinho de Compras**: Adicione, remova e finalize a compra de itens no carrinho de compras com uma interface interativa.
- **Verificação de Horário de Funcionamento**: Exiba uma mensagem indicando se o restaurante está aberto ou fechado com base no horário atual.

## Tecnologias Utilizadas

- **Angular**: Framework para o desenvolvimento do frontend.
- **SweetAlert2**: Biblioteca para exibição de alertas e modais.
- **Tailwind CSS**: Framework de CSS para estilização responsiva e moderna.

## Estrutura do Projeto

- **`src/app/`**: Diretório principal contendo todos os componentes e serviços do projeto.
  - **`footer/`**: Contém o componente `FooterComponent` que exibe o horário de funcionamento e o carrinho de compras.
  - **`model/services/`**: Contém o serviço `CarrinhoService` e a interface `Icarrinho` para gerenciar os itens do carrinho.
  - **`data/`**: Contém dados simulados para o carrinho de compras.

## Instalação e Configuração

1. **Clone o repositório**

   ```bash
   git clone https://github.com/wellingtoncorreia/appCardapio-codigo.git
   cd dev-burguer


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
