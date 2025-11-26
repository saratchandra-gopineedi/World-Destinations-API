import http from 'node:http'
import { getDataFromDB } from './database/db.js'
import { sendJSONResponse } from './utils/connection.js'
import { getDataByPathParams } from './utils/getDataByPathParams.js'
import { getDataByQueryParams } from './utils/getDataByQueryParameters.js'
 
const PORT = 8000

const server = http.createServer(async (req, res) => {

    let destinations = await getDataFromDB()
    const urlObj = new URL(req.url, `http://${req.headers.host}`)
    const queryObj = Object.fromEntries(urlObj.searchParams)

    if (urlObj.pathname === '/api' && req.method === 'GET') {
        const filteredData = getDataByQueryParams(destinations, queryObj)
        
        sendJSONResponse(res, 200, filteredData)
    }

    else if (req.url.startsWith("/api/continent") && req.method === 'GET') {
        const continentName = decodeURIComponent(req.url.split("/").pop())
        const filteredData = getDataByPathParams(destinations, 'continent', continentName)

        sendJSONResponse(res, 200, filteredData)
    }

    else if (req.url.startsWith("/api/country") && req.method === 'GET') {
        const countryName = decodeURIComponent(req.url.split("/").pop())
        const filteredData = getDataByPathParams(destinations, 'country', countryName)

        sendJSONResponse(res, 200, filteredData)
    }

    else {
        sendJSONResponse(res, 404, {
            error: "not found",
            message: "The requested route does not exist"
        })
    }
})

server.listen(PORT, () => console.log(`Connected on port: ${PORT}`))