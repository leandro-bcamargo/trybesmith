# PROJETO TRYBESMITH

Este projeto é uma API e um banco de dados para uma loja de items medievais. Trata-se de um dos projetos do módulo de back-end do curso de formação em desenvolvimento web full-stack da Trybe.

A aplicação foi desenvolvida em Typescript utilizando Node e Express para fazer um CRUD de itens da loja seguindo os princípios do REST.

Para que sejam feitas algumas requisições, é necessário que o usuário tenha feito login, que é autenticado via JWT Token.

## Como executar a aplicação usando Docker

Basta rodar os seguintes comandos:

- `docker-compose up -d --build` Para subir os containers de Node (blogs_api) e do banco de dados (blogs_api_db).
- `docker exec -it trybesmith bash` Para ter acesso ao terminal interativo do container do Node criado no passo anterior.
- `npm install` Para instalar as dependências do package.json no container do Node.
- `npm start` Para rodar a aplicação.

## Diagrama de Entidade-Relacionamento (fornecido pela Trybe)

![image](https://github.com/leandro-bcamargo/trybesmith/assets/96136619/10c1b1dc-3d9b-49ac-ae7a-08f44c585a81)

`Observação:` Os produtos são considerados artesanais e, portanto, únicos; por essa razão, a entidade `product` possui a propriedade `order_id`, e não o contrário.


## Endpoints da Aplicação

### POST /products

Cadastra um novo produto no banco de dados. O corpo da requisição deve ter o seguinte formato:

```json
  {
    "name": "Espada longa",
    "amount": "30 peças de ouro"
  }
```


### GET /products

Recupera todos os produtos cadastrados no banco de dados.


### POST /users

Cadastra um novo usuário no banco de dados. O corpo da requisição deve ter o seguinte formato:

```json
{ 
  "username": "MAX",
  "vocation": "swordsman",
  "level": 10,
  "password": "SavingPeople"
}
```


### GET /orders

Recupera todos os pedidos cadastrados no banco de dados.


### POST /login

Realiza o login do usuário e retorna um token JWT. O corpo da requisição deve ter o seguinte formato:

```json
  {
    "username": "string",
    "password": "string"
  }
```


### POST /orders

Cadastra um novo pedido no banco de dados. O pedido só pode ser cadastrado se o usuário estiver autenticado. O corpo da requisição deve ter o seguinte formato:

```json
  {
    "productsIds": [1, 2]
  }
```

