console.log("Inicio de tudo!!")

//HTTP (Verbos)
/* 
GET --> Pegar uma informação 
POST --> Enviar uma informação

DELETE 
PUT
PATCH
*/

//Criar servidor nodejs
//1 passo - importar http
const http = require('http');

//2 passo - criar o meu servidor

const myServer = http.createServer((req, res) => {
    //3 passo - definir as rotas
    console.log(req.url)
    //4 passo - responder para o usuário
    if (req.url === '/form') {

        res.end(`<div>

        Digite seu e-mail: <input type="text"><br>
        Digite sua senha: <input type="text"><br>
        <button>Entrar</button>

        </div>`)


    } else if (req.url === '/image') {
        res.end(`<html><div>
        <img src="https://www.worldanimalprotection.org.br/sites/default/files/styles/600x400/public/media/1015615.jpg?h=9ca80322&itok=usZr7nH-" alt="">
        <h1>Cabritinha perdida na selva</h1>
        </div></html>`)


    } else if (req.url === '/video') {
        res.end(`<html><div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/oreeTQVovvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div></html>`)

    } else {
        res.end(`<html><div>
        <img src="https://cdn-icons-png.flaticon.com/512/755/755014.png" alt="">
        </div></html>`)
    }
})

//3 passo - Abrir a porta do servidor
myServer.listen(8080, () => {
    console.log("Servidor está no ar...")
})

