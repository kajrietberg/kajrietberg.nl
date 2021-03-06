import fetch from 'node-fetch'
import dotenv from 'dotenv'
import Twitter from 'twitter'
// import { AllHtmlEntities as Entities } from 'html-entities'

dotenv.config()

// URL of notes JSON feed
const NOTES_URL = 'https://www.kajrietberg.nl/articles.json'

// Configure Twitter API Client
const twitter = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

// Helper Function to return unknown errors
const handleError = err => {
    console.error(err)
    const msg = Array.isArray(err) ? err[0].message : err.message
    return {
        statusCode: 422,
        body: String(msg)
    }
}

// Helper Function to return function status
const status = (code, msg) => {
    console.log(msg)
    return {
        statusCode: code,
        body: msg
    }
}

// Check exisiting notes
const processNotes = async articles => {
    if (!articles.length) {
        return status(404, 'No notes found to process.')
    }

    // assume the last note is not yet syndicated
    const latestNote = articles[0]
    if (!latestNote.syndicate) {
        return status(
            400,
            'Latest note has disabled syndication. No action taken.'
        )
    }

    try {
        // check twitter for any tweets containing note URL.
        // if there are none, publish it.
        const q = await twitter.get('search/tweets', { q: latestNote.url })
        if (q.statuses && q.statuses.length === 0) {
            return publishNote(latestNote)
        } else {
            return status(
                400,
                'Latest note was already syndicated. No action taken.'
            )
        }
    } catch (err) {
        return handleError(err)
    }
}


// Push a new note to Twitter
const publishNote = async article => {
    try {
        const statusText = article.title + ' ' + article.url
        const tweet = await twitter.post('statuses/update', {
            status: statusText
        })
        if (tweet) {
            return status(
                200,
                `Note ${article.date} successfully posted to Twitter.`
            )
        } else {
            return status(422, 'Error posting to Twitter API.')
        }
    } catch (err) {
        return handleError(err)
    }
}

// Main Lambda Function Handler
exports.handler = async () => {
    // Fetch the list of published notes to work on,
    // then process them to check if an action is necessary
    return fetch(NOTES_URL)
        .then(response => response.json())
        .then(console.log(response.json))
        .then(processNotes)
        .catch(handleError)
}