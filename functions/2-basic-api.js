const items = require('../assets/data')
    
exports.handler = async  (event, context) => {
    //console.log(context.functionName)
    return {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        statusCode:200,
        //body: `<mark>Here is</mark> Basic Api Function`  
        body: JSON.stringify(items,null,'\n  ') 
        //body: `JSON.stringify(items)`
    }
}