const items = require('../assets/data')
    
exports.handler = async  (event, context) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "text/plain"
        },
        statusCode:200,
        body: JSON.stringify(items,null,'\n  ') 
    }
}