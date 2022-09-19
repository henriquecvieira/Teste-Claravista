# Teste Claravista

# API de manipulação de dados!

- Serviço para gestão de manipulação de dados de site genérico.

# Como configurar o projeto?

- Certifique-se que tem as dependências [npm](https://www.npmjs.com/) (>= 6.x) e [Node.js](https://nodejs.org/) (>= 14.x) instaladas localmente.
- Este projeto utiliza Node.js com [javascript](https://www.javascript.com/).
- Tenha uma conexão com um banco de dados [MongoDB](https://www.mongodb.com/).
- Crie um arquivo `.env` na raíz do projeto e copie e cole os conteúdos do arquivo `.env.example`abaixo:
```sh
MONGO_URL=mongodb://localhost:27017/testeClaravista
PORT=3000
SECRET=senha para gerar token
EXPIRES=86400
API_URL=localhost:3000
```

- Preencha a URL de conexão ao seu banco do MongoDB na primeira linha o arquivo `.env`.
          inserindo o comando `process.env` (ex. `process.env.MONGO_URL`).

- Na raíz, instale o restante das dependências do projeto através do comando `npm install`.

- Inicialize o projeto através do comando `npm run start`.

- O projeto utiliza o [Nodemon](https://nodemon.io/), logo as atualizações feitas ao código durante o desenvolvimento são automaticamente capturadas, o servidor é re-criado sem intervenção manual (com exceção às alterações no arquivo `.env`. Neste caso é preciso encerrar a execução do servidor e executar o comando `npm run start` novamente).

- O projeto possui documentação das rotas feita com swagger [Swagger](http://localhost:3000/documents/)

- Caso tenha tudo ocorrido de acordo, o terminal deverá apresentar a seguinte saída:
```sh
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/app.js`
⚡️ Server is running at https://localhost:3000
⚡️ MongoDB connection established successfully
```

##Insomnia configurado conforme abaixo:

- Rota POST localhost:3000/v1/insert/home
(já gerando o token apenas para demonstrar)

```sh
{
	"session_id": "8",
	"url": "HTTPS://ECOMMERCE.COM.BR/HOME",
	"url_base": "HTTPS://ECOMMERCE.COM.BR",
	"endpoint": "/home",
	"hash_user": "15",
	"created_at": "15/09/2022"	
}
```
![image](https://user-images.githubusercontent.com/87788394/191024207-d753d919-1f95-44ae-af72-fb39a6e5b15e.png)

- Rota GET localhost:3000/v1/session_id
![image](https://user-images.githubusercontent.com/87788394/191024498-fe8ae961-ada5-4fc3-857f-9d5e85994633.png)


- Rota GET localhost:3000/v1/hash_user
![image](https://user-images.githubusercontent.com/87788394/191024962-5e5ee31c-bedd-48c1-9052-c40e65217d2a.png)

- Rota DELETE localhost:3000/v1/delete
DELETE LÓGICO APENAS, O REGISTRO CONTINUA NO BANCO, PORÉM APENAS NÃO FICA MAIS VISÍVEL!!
![image](https://user-images.githubusercontent.com/87788394/190691054-e314ff74-b0e4-4aad-8433-4aff774a0127.png)



