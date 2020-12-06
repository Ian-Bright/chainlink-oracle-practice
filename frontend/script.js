require('dotenv').config()
const axios = require('axios')

const getRetweets = async () => {
    const url = 'https://api.twitter.com/1.1/statuses/retweeters/ids.json'
    const params = {
        'id' : '1253709718666829825',
        'stringify_ids' : 'true'
    }
    const headers = {
        'Authorization' : `Bearer ${process.env.BEARER_TOKEN}`
    }

    let ret = await axios.get(url, { params, headers })
    console.log('IDS: ', await ret.data.ids)
}

getRetweets()