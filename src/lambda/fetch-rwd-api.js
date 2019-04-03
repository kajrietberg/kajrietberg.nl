// import fetch from "node-fetch";
const axios = require("axios")
require('dotenv').config();

const AUTH = process.env.NETLIFY_NUMBERPLATE;
const API_ENDPOINT =
    `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${AUTH}`;
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
}

// exports.handler = async (event, context) => {
//     return fetch(API_ENDPOINT)
//         .then(response => response.json() )
//         .then(data => ({
//             statusCode: 200,
//             headers,
//             body: JSON.stringify(data)
//         }))
//
//         .catch(error => ({ statusCode: 422, body: String(error) }));
// };



export function handler(event, context, callback) {

    // Here's a function we'll use to define how our response will look like when we call callback
    const pass = (body) => {callback( null, {
        statusCode: 200,
        headers,
        body: JSON.stringify(body)
    })}

    // Perform the API call.
    const get = () => {
        axios.get(API_ENDPOINT)
        if(event.httpMethod == 'GET') {
            .then((response) => { pass(response.data) })
                .catch(err => pass(err))
        };

    }

};

