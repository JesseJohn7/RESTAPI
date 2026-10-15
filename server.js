import http from 'node:http'
import { getDataFromDB } from './db'
const PORT = 3000;
const server = http.createServer(async(req,res) => {

const destination = await db.getDataFromDB();

    /* Conditional Server rendering */
    /* if (req.url === '/api') {
        res.end('Hola de Server!')
    } */

    /* Combining with Method and URL */
    
    if (req.method === 'GET' && req.url === '/api') {
        res.end(JSON.stringify(destination))
    }

    /* Else is not compulsory */

    /* else{
        res.end('No endpoint found')
    } */
    
    /* URL of request tells us what endpoint client is trying to hit */
    /* console.log(req.url); */

})  
console.log("We have a Package.Json !!!") 

/* REQUEST PROPERTY */

 
/* HTTP LISTENER */

server.listen(PORT,() => 
    console.log(`Server is running on port ${PORT}`)
)  


/* JSON EXAMPLE */

const animal = {
    type:"cattle",
    name:"Jacob Nikklesan"
}

console.log(JSON.stringify(animal))