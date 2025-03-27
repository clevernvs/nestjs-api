<div align="center">  

<h1> API NestJS </h1>

![Typescript](https://img.shields.io/badge/-Typescript-1e272e?style=for-the-badge&logo=Typescript)&nbsp;
![Nestjs](https://img.shields.io/badge/-Nestjs-1e272e?style=for-the-badge&logo=Nestjs)&nbsp;
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-1e272e?style=for-the-badge&logo=PostgreSQL)&nbsp;
![Docker](https://img.shields.io/badge/-Docker-1e272e?style=for-the-badge&logo=Docker)&nbsp;
</div>

<h1> Descrição: </h1>
<p>
API com funcionalidades basicas para criação de usuário e autenticação no sistema.
</p>

<h1> Funcionalidades Básicas </h1>

- Criação de conta para usuários externos
- Criação de conta para usuários Administradores
- Autenticação e Autorização
- Envio de emails para confirmação de cadastro
- Envio de emails para recuperação de senha
- Busca de usuários com filtros e paginação
- Busca de dados de um usuário específico
- Bloquear o acesso de um usuário
- Manter um log do que acontece no servidor

<h1> Como utilizar o projeto </h1>

<h3> Primeiro, clone o projeto para um repositório local </h3>

```bash
# via Https
$ git clone https://github.com/clevernvs/nestjs-api.git

# ou 

# via SSH
$ git clone git@github.com:clevernvs/nestjs-api.git

```

<h3>Acesse o repositório do projeto local e instale as dependências.</h3>

```bash

$ cd nestjs-api

$ npm install

```
<h3>Em seguida, suba os containers</h3>

```bash

$ docker-compose up - d

```

<h3>Execute o ambiente de desenvolvimento</h3>

```bash

$ npm run start:dev

```
