import fetch from "node-fetch";
require('dotenv').config();

const AUTH = process.env.NETLIFY_NUMBERPLATE;
const API_ENDPOINT =
    `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${AUTH}`;

exports.handler = async (event, context) => {
    return fetch(API_ENDPOINT)
        .then(response => response.json())
        .then(data => ({
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: `${data[0].merk} ${data[0].handelsbenaming} *BA DUM TSSS*`
        }))
        .catch(error => ({ statusCode: 422, body: String(error) }));
};