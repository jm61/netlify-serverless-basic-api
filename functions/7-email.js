require('dotenv').config()
const nodemailer = require('nodemailer')

const {EMAIL_HOST, EMAIL_PORT,EMAIL_USER,EMAIL_PWD} = process.env
let transporter = nodemailer.createTransport({
    host: EMAIL_HOST,
    port: EMAIL_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: EMAIL_USER, // generated ethereal user
      pass: EMAIL_PWD, // generated ethereal password
    },
  });

exports.handler = async  (event, context) => {
    const method = event.httpMethod
    if(method !== 'POST') {
        return {
            statusCode:405,
            body: `Only POST request Allowed`  
        }
    }
    const {name,email,subject,message} = JSON.parse(event.body)
    const data ={
        from: 'James Booba <j.booba@gmail.com>',
        to: `${name} <${email}>`,
        subject: subject,
        html: `<p>${message}</p>`
    }
    try {
       await transporter.sendMail({...data}) 
       return {
        headers: {"Content-Type": "text/plain"},headers: 
            {"Content-Type": "text/plain",
            'Access-Control-Allow-Origin': '*'},
        statusCode:200,
        body: `Success`  
     }
    } catch (error) {
        return {
           statusCode: 400,
           body: JSON.stringify(error.message) 
        }
    }   
}