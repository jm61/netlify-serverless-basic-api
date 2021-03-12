// domain/.netlify/functions/1-hello
exports.handler = async  (event, context) => {
    //console.log(context.functionName)
    return {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        statusCode:200,
        body: `Hello from the first Netlify Function`  
    }
}