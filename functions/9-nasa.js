require('dotenv').config()
const axios = require('axios')
const url= `https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_API_KEY}&count=1`

exports.handler = async  (event, context, cb) => {
    try {
        const resp = await axios.get(url)
        return {
            headers: 
            {"Content-Type": "text/plain",
            'Access-Control-Allow-Origin': '*'},
            statusCode:200,
            body: JSON.stringify(resp.data,null,'  ')
            }
    } catch (error) {
        return {
            headers: {"Content-Type": "text/plain"},
            statusCode:404,
            body: JSON.stringify(error.data)
            }
    }
}