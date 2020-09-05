Desafio FullStack

BackEnd
O projeto backend está na pasta backend
Foi usado o NodeJS 12.18.3

Antes de iniciar deve instalar os pacotes iniciais com o comando abaixo
npm install

Foi utilizado o MongoDb local e está configurado em src/database/index.js. 
A autenticação foi utilizado JWT por tokens e na pasta src/config contém o local para colocar alguma palavra secreta
foi utilado a porta 3001 para rodar o servidor

para iniciar o servidor executar o comando abaixo

node .\src\index.js

o cadastro de usuários é pelo caminho /users/register pelo método POST
onde tem que se passar 
name, email e password

É verificado no banco de dados se o email já existe

Para authenticação é pelo caminho /users/authenticate pelo método POST
passar email e password. Ao logar é gerado um token para acessar as rotas propostas no trabalho

Com Autenticação
Edição de usuários é pelo caminho /users/id pelo método PUT
Listagem dos dados do usuário pelo caminho /users/id pelo método GET

para cadastro de transações  é pelo caminho /transacao pelo método POST
onde se passa os parametros 
title, value e type. 

O cadastro não deixa o valor do total ficar negativo. Ao perceber que irá ficar negativo retorna HTTP 400 e não cadastra

para listagem das transações é pelo caminho /transacao/user_id pelo método GET




