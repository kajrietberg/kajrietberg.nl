const axios = require("axios")
require('dotenv').config();

const AUTH = process.env.NETLIFY_NUMBERPLATE;
const API_ENDPOINT =
    `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${AUTH}`;
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
        axios.get(API_ENDPOINT)
            .then(response => { pass(response.data )})
            .catch(err => pass(err))
    }
    if(event.httpMethod == 'GET'){
        get()
    };
};