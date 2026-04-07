## Autor

João Pedro Cochek Giovannoni

---

# GPU Manager - Backend

Backend da aplicação **GPU Manager**, responsável pelo gerenciamento de dados das placas de vídeo, incluindo cadastro, edição, visualização e integração com banco de dados.

---

## Sobre o Projeto

Este backend foi desenvolvido utilizando **Node.js** e tem como principal função fornecer uma API para o frontend consumir, permitindo operações completas de CRUD (Create, Read, Update, Delete) sobre GPUs.

---

## Tecnologias Utilizadas

* Node.js
* Express
* MySQL
* dotenv
* Cors

---

## Estrutura do Projeto

```
backend/
│
├── node_modules/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   └── gpuController.js
│   ├── models/
│   │   └── gpuModel.js
│   ├── routes/
│   │   └── gpuRoutes.js
│   ├── services/
│   │   └── gpuService.js
│   └── app.js
│
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

---

## Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js (versão 16 ou superior)
* MySQL
* Git

---

## Como Rodar o Projeto

### 1. Clone o repositório

```
git clone https://github.com/Cochek2903/Backend-PJBL.git
cd Backend-PJBL
```

---

### 2. Instale as dependências

```
npm install
```

---

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha_do_seu_banco
DB_NAME=gpu_manager
PORT=3001
```

---

### 4. Configure o banco de dados

1. Abra o MySQL
2. Crie um banco de dados
3. Importe o arquivo `.sql` que está no projeto

Exemplo:

```
CREATE DATABASE gpu_manager;
USE gpu_manager;
-- importar arquivo .sql
```

---

### 5. Inicie o servidor

```
npm run dev
```

---

## API

O servidor estará rodando em:

```
http://localhost:3001
```

---

## Funcionalidades

* Listagem de GPUs
* Cadastro de novas GPUs
* Edição de GPUs existentes
* Visualização detalhada
* Remoção de GPUs

---

## Integração

Este backend foi desenvolvido para ser consumido pelo frontend da aplicação.

---

## Problemas Comuns

### Erro de conexão com banco

* Verifique o `.env`
* Confirme se o MySQL está rodando

### Porta em uso

* Altere a variável `PORT` no `.env`

---

## Testando o Projeto

Para garantir que está tudo funcionando:

1. Rode o backend
2. Acesse: `http://localhost:3001`
3. Utilize ferramentas como Postman ou o frontend

