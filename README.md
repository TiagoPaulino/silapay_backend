# Backend - API de Produtos (NestJS, Prisma e MariaDB)

Este projeto é uma API RESTful para gerenciamento de produtos, desenvolvida com **NestJS**, **Prisma** e **MariaDB**.

## Tecnologias Utilizadas

- **NestJS** - Framework para construção da API.
- **Prisma** - ORM para manipulação do banco de dados.
- **MariaDB** - Banco de dados relacional.

## Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- Banco de dados MariaDB
- Prisma CLI (`npm install -g prisma`)

### Passo a Passo

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/TiagoPaulino/silapay_backend.git
   cd silapay_backend
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure as variáveis de ambiente:**
    <br>Crie um arquivo `.env` na raiz do projeto e adicione:
     ```sh
     DATABASE_URL="mysql://root:root@localhost:3306/produtos"
     ```

4. **Execute as migrações do Prisma:**
   ```sh
   npx prisma migrate dev --name init
   ```

5. **Inicie o servidor:**
   ```sh
   npm run start:dev
   ```

A API estará rodando em `http://localhost:3000` 

## Endpoints da API

### Categorias

- **`GET /categories`** → Retorna todas as categorias.
- **`GET /categories/:id`** → Retorna uma categoria pelo ID.
- **`POST /categories`** → Cria uma nova categoria.
  - **Body:**<br> ```{ 
            name: string,
          }
          ```
- **`PUT /categories/:id`** → Atualiza uma categoria existente.
  - **Body:**<br> `{ name: string }`
- **`DELETE /categories/:id`** → Exclui uma categoria.

###  Produtos

- **`GET /products`** → Retorna todos os produtos.
- **`GET /products/:id`** → Retorna um produto pelo ID.
- **`POST /products`** → Cria um novo produto.
  - **Body:**<br> ```{ 
            name: string,
            price: number,
            description: string,
            stock: number,
            image: string,
            categoryId: string,
          }
          ```
- **`PUT /products/:id`** → Atualiza um produto existente.
  - **Body:**<br> `{ name?: string, price?: number, description?: string }`
- **`DELETE /products/:id`** → Exclui um produto.

## Validação dos Dados

- O **nome** não pode ser vazio.
- O **preço** deve ser um número positivo.
- Respostas de erro seguem os status apropriados:
  - `400` → Erro de validação
  - `404` → Produto não encontrado


## Licença

Este projeto foi desenvolvido como parte de um teste técnico. Todos os direitos reservados.

---

Se precisar de mais informações ou suporte, entre em contato!

