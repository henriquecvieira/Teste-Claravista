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

- Rota POST localhost:3000/v1/navigation
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
- Rota GET localhost:3000/v1/navigationsession
![image](https://user-images.githubusercontent.com/87788394/190690802-3452ffb7-7365-4ac6-8a28-84deeeceaa7b.png)


- Rota GET localhost:3000/v1/navigationhash
![image](https://user-images.githubusercontent.com/87788394/190690923-325b4fff-af8a-4df1-8d12-375e61098f61.png)

- Rota DELETE localhost:3000/v1/navigationdelete
![image](https://user-images.githubusercontent.com/87788394/190691054-e314ff74-b0e4-4aad-8433-4aff774a0127.png)



