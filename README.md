# DevBurger Interface

DevBurger Interface é a aplicação frontend para o gerenciamento e interação com a hamburgueria **DevBurger**. Esta interface possui duas áreas principais:

1. **Área do Cliente**: Onde os usuários podem visualizar e realizar pedidos de produtos.
2. **Área Administrativa**: Para gerenciar produtos, categorias e pedidos.

<br>

> **Nota:** Esta interface estará conectada à API [DevBurger API](https://github.com/Allysson-ryan/devburger-api), que fornece os dados e funcionalidades necessários para o funcionamento do sistema.

## Índice

- [Recursos](#recursos)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Configuração](#configuração)

## Recursos

### Área do Cliente

- Navegação por categorias de produtos.
- Adição de produtos ao carrinho de compras.
- Visualização e finalização de pedidos.

### Área Administrativa

- Gerenciamento de produtos (adicionar, editar e remover).
- Gerenciamento de categorias.
- Controle de pedidos em andamento.

## Tecnologias

- [React.js](https://reactjs.org/): Biblioteca para construção de interfaces.
- [React Router](https://reactrouter.com/): Gerenciamento de rotas no frontend.
- [Axios](https://axios-http.com/): Cliente HTTP para comunicação com a API.
- [Styled Components](https://styled-components.com/): Estilização dinâmica de componentes.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/Allysson-ryan/devburger-interface.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd devburger-interface
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

## Configuração

Certifique-se de que a API **DevBurger** está configurada e rodando. Atualize o arquivo de configuração `src/config/api.js` com a URL base da API:

```javascript
export const API_BASE_URL = 'http://localhost:3333';
```

Desenvolvido por [Allysson Ryan](https://github.com/Allysson-ryan).
