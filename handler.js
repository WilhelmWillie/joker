'use strict'

const content = require('./content')
const jokes = content.jokes
const pickupLines = content.pickupLines
const insults = content.insults

module.exports.getJoke = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      type: 'joke',
      content: jokes[(Math.random() * jokes.length) | 0]
    })
  }

  callback(null, response)
}

module.exports.getPickupLine = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      type: 'pickupLine',
      content: pickupLines[(Math.random() * pickupLines.length) | 0]
    })
  }

  callback(null, response)
}

module.exports.getInsult = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      type: 'insult',
      content: insults[(Math.random() * insults.length) | 0]
    })
  }

  callback(null, response)
}
