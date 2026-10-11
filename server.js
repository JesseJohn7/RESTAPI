import http from 'node:http'
const PORT = 3000;
const server = http.createServer((req,res) => {
    res.end('Hola de Server!')
    
})  
console.log("We have a Package.Json !!!") 


/* HTTP LISTENER */

server.listen(PORT,() => 
    console.log(`Server is running on port ${PORT}`)
)