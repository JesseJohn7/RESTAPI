import http from 'node:http'
const PORT = 3000;
const server = http.createServer((req,res) => {
    res.end('Hola de Server!')
    
    /* URL of request tells us what endpoint client is trying to hit */
    console.log(req.url);

})  
console.log("We have a Package.Json !!!") 

/* REQUEST PROPERTY */

 
/* HTTP LISTENER */

server.listen(PORT,() => 
    console.log(`Server is running on port ${PORT}`)
)  