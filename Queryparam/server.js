import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/sendJSONResponse.js'

const PORT = 8000

const server = http.createServer(async (req, res) => {
 
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    console.log(req.headers)

    const queryObject = Object.fromEntries(urlObj.searchParams.entries())
    console.log(queryObject)
})

/* Query Parameters */



server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))


