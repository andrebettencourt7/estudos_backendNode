const http = require('http')

const server = http.createServer(function(req, res){

    if(req.url === '/signup' && req.method == 'POST'){
        var body = '';
        //Forma que o nodejs "escuta os dados vindos de fora (POST)"
        req.on('data', function(data){
            body += data
        })

        req.on('end', function(){
            //parse = converte os dados em JSON
            var received = JSON.parse(body)
            console.log(received)
            if(received.email === 'andre@email.com'){
                res.end('Email OK!!')
            }else{
                res.end('Verifique email...')
            }
        })
        //res.end("OK")
        return
    }

})

server.listen(2002, ()=>{
    console.log("Servidor on...")
})