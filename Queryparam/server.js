import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
 
    
})

/* Query Parameters */



server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))


