// domain/.netlify/functions/1-hello
exports.handler = async  (event, context) => {
    //console.log(context.functionName)
    return {
        statusCode:200,
        body: `<mark>Here is</mark> the first Netlify Function`  
    }
}