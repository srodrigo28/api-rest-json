# Api simples com nodeJS
## Passo a passo seguindo Leonardo Cod3r
* npm init -y
* instalar a unica depedencia do projeto Json-Server
    * npm i --save json-server@0.17.0 -E
* criar o db.json no raiz
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
* Executar a api
    * npm start
* Fim muito feliz api pronta em menos de 10min.