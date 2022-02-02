# Api simples com nodeJS
## Esse projeto foi construido usando NodeJS 16lts
## Passo a passo seguindo Leonardo Cod3r
* npm init -y
* instalar a unica depedencia do projeto Json-Server
    * npm i --save json-server@0.17.0 -E
* criar o db.json no raiz

![image](https://user-images.githubusercontent.com/23580648/152041834-69e42c95-2281-4156-acc5-d913f865460a.png)


    * {
            "users":[
                { "id": 1, "name": "Arthur Oliveira", "email": "aoliveira@oi.com" },
                { "id": 2, "name": "Bela Siqueira", "email": "bsiqueira@oi.com" },
                { "id": 3, "name": "Cris Nascimento", "email": "crisnasc@bol.com"}
            ]
        }
* configure o package.json
    * "scripts": {
            "start": "json-server --watch db.json --port 3001"
        },

![image](https://user-images.githubusercontent.com/23580648/152042205-932de3c3-3703-4005-95a7-02a59dba5a5a.png)
     
   
* Executar a api
    * npm start
* Fim muito feliz api pronta em menos de 10min.

## Link base
* https://alunos.b7web.com.br/curso/reactjs/react-lidando-com-loading
* https://www.udemy.com/course/curso-web/learn/lecture/10666734#overview

## Projeto associado com react
* https://github.com/srodrigo28/react-requisicao-hooks

## Consumindo uma API no Front-End
* https://www.youtube.com/watch?v=vYlz3SmNXQQ