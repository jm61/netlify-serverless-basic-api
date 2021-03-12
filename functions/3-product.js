const Airtable = require('airtable-node')
require('dotenv').config()

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table('products')

exports.handler = async  (event, context) => {
    const {id} = event.queryStringParameters
    if(id) {
        try {
           const product = await airtable.retrieve(id)
            if(product.error) {
                return {statusCode: 404,
                body: `No product with id: ${id}`
                }
            }
            return {
                headers: 
                    {"Content-Type": "text/plain",
                    'Access-Control-Allow-Origin': '*'},
                statusCode: 200,
                body: JSON.stringify(product, null, '  ')
                    }
        } catch (error) {
            return {
                statusCode:500,
                body: 'Server Error...'  
            }
        }
    }      
}