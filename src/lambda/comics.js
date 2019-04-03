// import fetch from "node-fetch";
const axios = require("axios")
// require('dotenv').config();

// const AUTH = process.env.NETLIFY_NUMBERPLATE;
const API_COMIC =
    `https://api.shortboxed.com/comics/v1/new`;
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
        axios.get(API_COMIC)
            .then((response) => { pass(response.data) })
            .catch(err => pass(err))
    }
    if(event.httpMethod == 'GET'){
        get()
    };
};

