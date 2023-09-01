const http = require('http');

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
    if (request.url === '/inserir') {
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connected!");
            var sql = "INSERT INTO alunos (nome, telefone, email, escola) VALUES ('Joaquin', '1199998888', 'joaquin@email.com', 'SENAI')";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });

            response.end(JSON.stringify({message: "Salvos"}))
        });

    } else if (request.url === '/visualizar') {
        //Pega as informações no banco de dados e expoe:
        con.query("SELECT * FROM alunos", function (err, result, fields) {
            if (err) throw err;
            response.end(JSON.stringify(result))
            console.log(result);
        });

    } else if (request.url === '/deletar') {
        con.connect(function (err) {
            if (err) throw err;
            var sql = "DELETE FROM alunos WHERE telefone = '1199998888'";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("Number of records deleted: " + result.affectedRows);
            });

            response.end(JSON.stringify({message: "Deletado"}))
        });

    } else if (request.url === '/update') {
        con.connect(function (err) {
            if (err) throw err;
            var sql = "UPDATE alunos SET email = 'joaquin@email.com' WHERE email = 'joaquin2@email.com'";
            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(result.affectedRows + " record(s) updated");
            });
            response.end(JSON.stringify({message: "Update"}))
        });

    }else {
        response.end(JSON.stringify({
            erro: true,
            message: "Data not found...."
        }))
    }
})


server.listen(3001, () => {
    console.log("servidor no ar")
})