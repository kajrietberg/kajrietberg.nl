import fetch from "node-fetch";
require('dotenv').config();

const AUTH = process.env.NETLIFY_NUMBERPLATE;
const API_ENDPOINT =
    `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${AUTH}`;
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
}

exports.handler = async (event, context) => {
    return fetch(API_ENDPOINT)
        .then(response => response.json() )
        .then(data => ({
            statusCode: 200,
            headers,
            body: JSON.stringify(data)
        }))

        .catch(error => ({ statusCode: 422, body: String(error) }));
};