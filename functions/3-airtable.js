const Airtable = require('airtable-node')
require('dotenv').config()

const airtable = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE)
  .table('products')

exports.handler = async  (event, context, cb) => {
    try {
        const {records} = await airtable.list()
        const products = records.map((product) => {
            const {id} = product
            const {name, image, price} = product.fields
            const url = image[0].url
            return {id, name, url, price}
        })
        return {
            headers: {"Content-Type": "text/plain"},
            statusCode:200,
            body: JSON.stringify(products, null, '  ')
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