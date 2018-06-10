# Joker

## What is this?
Joker is a simple REST API that returns jokes of different kinds. 

## API Routes

**Get Jokes** - Returns a random joke
`GET - https://iaeufj7svc.execute-api.us-east-1.amazonaws.com/dev/joke`

**Get Pickup Line** - Returns a random pickup line
`GET - https://iaeufj7svc.execute-api.us-east-1.amazonaws.com/dev/pickupLine`

**Get Insult** - Returns a random insult
`GET - https://iaeufj7svc.execute-api.us-east-1.amazonaws.com/dev/insult`

**Example Responses** 
Jokes: `{"type":"joke","content":"A foo walks into a bar, takes a look around and says... Hello, World!"}`

Pickup Line: `{"type":"pickupLine","content":"Are you a magician? Because whenever I look at you, everyone else disappears!"}`

Insult: `{"type":"insult","content":"Oh my God, look at you. Was anyone else hurt in the accident?"}`


## Why?
I got really bored one afternoon and wanted to experiment with AWS Lambda and serverless architecture. I didn't have the time to write a full REST API hooked up w/ a database and client so instead I just whipped up a small REST API that returns static content.

## Plans for the Future
While Joker is not a serious REST API as of right now, I plan on expanding this project in the future. The goal of this project is to further understand serverless architecture and its many possibilities so I hope to use Joker as a way to do just that. The following is a list of ideas I have off the top of my head

* Hook up Joker to a database to allow for dynamic content
* Allow jokes to be submitted via a POST route
* Support reactions to jokes (ex: like, dislike, love, 'haha')
* Set up joke categories
* Develop a front-end client for Joker
* Support user profiles and authentication
* Add Twilio support (ex flow: user texts a number for a joke, receives one via SMS)