const Airtable = require('airtable-node')
require('dotenv').config()

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table('survey')

exports.handler = async  (event,context) => {
    const method = event.httpMethod
    if(method === 'GET') {
        try {
        console.log(event)
        const {records} = await airtable.list()
        const survey = records.map((item) => {
            const {id} = item
            const {room,votes} = item.fields
            return {id, room, votes}
        })
        return {
            headers: {"Content-Type": "text/plain"},
            statusCode:200,
            body: JSON.stringify(survey, null, '  ')
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: 'Server Error'
        }
    } finally {
        console.log('Finally')   
     }
    }
    if(method === 'PUT') {
        try {
            const {id,votes} = JSON.parse(event.body)
            if(!id || !votes) {
                return {statusCode:400, body: "Please provide id and votes"}
            }
        const fields = {votes:Number(votes)+1}
        const item = await airtable.update(id,{fields})
            if(item.error) {
        return {
                    statusCode: 400,
                    body: JSON.stringify(item)
                }
            }
                return {
                    headers: 
                        {"Content-Type": "text/plain",
                        'Access-Control-Allow-Origin': '*'},
                    statusCode: 200,
                    body: JSON.stringify(item)
            }
        } catch (error) { 
            return {
                statusCode: 400,
                body: "Please provide id and votes"
            }
        }
    }
    // default response
    return {
        headers: {"Content-Type": "text/plain"},
        statusCode: 405,
        body: 'Only GET and PUT http methods allowed!'
    }  
}