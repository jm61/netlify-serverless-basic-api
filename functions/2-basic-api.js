const items = require('../assets/data')
    
exports.handler = async  (event, context) => {
    //console.log(context.functionName)
    return {
        statusCode:200,
        //body: `<mark>Here is</mark> Basic Api Function`  
        body: JSON.stringify(items,null,'\n  ') 
        //body: `JSON.stringify(items)`
    }
}