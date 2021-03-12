exports.handler = async  (event, context) => {
    return {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "text/plain",
        },
        statusCode:200,
        body: `Hello from the first Netlify Function`  
    }
}