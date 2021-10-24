const http = require('http')

const PORT = 4000
//Create a server that can manage request (req) from a client to make transactions to other applications 
//and provide responses (res) to those request.
const server = http.createServer((req, res)=>{

    if(req.url === '/') {
        res.end("Welcome to our home page")
    } else if(req.url === '/about'){
        res.end('Here is our short history')
    } else {
        res.end(`<h1>Oops!<h1/>
    <p>It seems the page you are looking for does not exists<p/>
    <a href= "/">Back to home <a/>`);
    }

   
})

//listen() call indicates a readiness to accept client connection requests from a given port.

server.listen(PORT);