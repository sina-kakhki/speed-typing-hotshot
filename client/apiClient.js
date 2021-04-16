const request = require('superagent')

const quoteUrl = '/api/v1/quote' // will need to update once db route is done

export function getQuote () {
  return request
    .get(quoteUrl)
    .then(response => {return response.body})
}