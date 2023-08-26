const http = require ('http');

const fs = require('fs')

//importar mysql:
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "@12345678",
    database: "escola"
});

//Criar um Database = schema



function readFile(response, file) {
    fs.readFile(file, function (err, data) {
        response.end(data)
    })
}

const server = http.createServer((request, response) => {
    if (request.url === '/alunos') {
        //Pega as informações no banco de dados e expoe:
        con.query("SELECT * FROM alunos", function (err, result, fields) {
            if (err) throw err;
            response.end(JSON.stringify(result))
            console.log(result);
        });
    } else {
        response.end(JSON.stringify({
            erro: true,
            message: "Data not found...."
        }))
    }
})

server.listen(3001, () => {
    console.log("servidor no ar")
})