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

FrontEnd
Foi desenvolvido em ReactJs

Para instalação dos pacotes iniciais
npm install

Para funcionar as funcionalidades do projeto necessita estar executando o backend
para iniciar o frontEnd executar
npm start

Será executado na porta 3000
abrirá na página de Login que está no caminho /login, e terá um icone para registrar usuário

Para registrar está como caminho /register e tem como campo nome, email e senha. Ao cadastrar passará pelos requisitos estabelecido pelo BackEnd

Ao se cadastrar será redirecionado para pagina de login para o mesmo se logar na aplicação

Ao se logar, é gerado um token que fica armazenado no localstorage junto com as informações do usuário e é redericionado para a pasta de dashboard que está no caminho /dashboard

A página dashboard é fechado e só usuários logados conseguem acessar

A página contém o histórico de transações do usuário e o total em conta 

No menu superior possui 4 icones, sendo o primeiro redirecionado para página dashboard, o segundo redirecionado para novas transações, o terceiro para edição do usuário e o último de logout

Para Novas Transações possuem o campo de title e valor e está no caminho /dashboard/transacao. Quando o usuário registra valores positivos é identificado como type income e registrado no banco o title, o valor e o type como income. Quando o usuário registra valores negativos é identificado com type outcome e registrado no banco o title, valor e type como outcome. Ao registrar qualquer valor o saldo é atualizado.

Para edição dos usuários é usado a mesma página /register de registro de novos usuários. Porém, contém uma condição que verifica se o usuário está logado ou não. Quando não está logado ele cadastra o usuário no banco pelo método POST. Quando está logado, os campos de Nome e email são preenchidos automaticamente e para editar é só alterar esses campos e colocar a mesma senha para não alterar a senha ou colocar outra senha para alterar a senha. Isso é tratado pelo redux-saga na pasta src/store/modules/auth/sagas.js

nesse projeto foi utilizado os serviços de axios, para comunicar com o backend, e o history
Módulos de actions, reducer, reduxPersist






