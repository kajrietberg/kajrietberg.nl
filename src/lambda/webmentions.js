const axios = require("axios")

const AUTHWEBMENTION = process.env.WEBMENTION_IO_TOKEN;
const API_ENDPOINT_WEBMENTION = `https://webmention.io/api/mentions.jf2?domain=www.kajrietberg.nl&token=${AUTHWEBMENTION}`;
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
}

export function handler(event, context, callback) {

    // Here's a function we'll use to define how our response will look like when we call callback
    const pass = (body) => {callback( null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(body)
    })}
    console.log(pass);

    // Perform the API call.
    const get = () => {
        axios.get(API_ENDPOINT_WEBMENTION)
            .then((response) => { pass(response.data) })
            .catch(err => pass(err))
    }
    if(event.httpMethod == 'GET'){
        get()
    };
};

