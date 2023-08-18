/* Revisão 
1- criar um servidor http
 */
/* Passo 1 => Importar o pacote http (package) */
const http = require('http')
//Para leitura de arquivos, vamos importar o pacote "fs"
const fs = require('fs')

//Criar uam função que pega dois params: response e o file ()
function readFile(response, file) {
    fs.readFile(file, function (err, data) {
        console.log(err)
        //responde para o usuário com os dados do arquivo
        response.end(data)
    })
}


/* Passo 2 => criar servidor */
const server = http.createServer((request, response) => {
    //Vamos criar os endpoints da api
    //Dependendo da regra de negocio, criaremos os nosso endpoints

    if (request.url === '/dog') {
        readFile(response, 'dog.json')

    } else if (request.url === '/cat') {
        readFile(response, 'cat.json')

    } else if (request.url === '/fish') {
        readFile(response, 'fish.json')

    } else if (request.url === '/rabbit') {
        readFile(response, 'rabbit.json')
    }else{
        response.end(JSON.stringify({
            erro:true,
            message: "Data not found...."
        }))
    }
})

//Passo 3 => abrir a porta para ouvir o sevidor 
server.listen(2002, () => {
    console.log("Servidor no ar...")
})