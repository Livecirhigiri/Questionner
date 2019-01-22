# Questionner


# RestFull API
#### the restull API is a part of the part of building a complete application which consist on testting data structure. It is the Backend code helps to implement the project

## Motivation

#### to test our ability of building a full stack application, this learning project to prepare Andela's bootcamp cycle 2 helps.

## Build status

- [![Build Status](https://travis-ci.com/Livecirhigiri/LastEndPoint2.svg?branch=master)](https://travis-ci.com/Livecirhigiri/LastEndPoint2)

- [![Maintainability](https://api.codeclimate.com/v1/badges/0343bd4b6fdcdb068991/maintainability)](https://codeclimate.com/github/Livecirhigiri/LastEndPoint2/maintainability)

- [![Test Coverage](https://api.codeclimate.com/v1/badges/0343bd4b6fdcdb068991/test_coverage)](https://codeclimate.com/github/Livecirhigiri/LastEndPoint2/test_coverage)

- [![Coverage Status](https://coveralls.io/repos/github/Livecirhigiri/LastEndPoint2/badge.svg?branch=Develop)](https://coveralls.io/github/Livecirhigiri/LastEndPoint2?branch=Develop)

## Tools

- Server Side Framework: [Node](https://nodejs.org/en/)
- Linting Library : [Eslint](https://eslint.org/)
- Style Guide : [Airbnb](https://github.com/airbnb/javascript)
- Testing framework : [Mocha](https://mochajs.org/)

## Features

### main requires features

1. Admin can create and delete a meetUp
2. Admin can log into his interface
3. User can create an account and log in
4. User can post question to a specific meetup
5. User can upvote or downvote
6. Admin create meetUp basing on the most interesed
7. User can comment a specific meetUp

### Optional features

1. Admin can add images to a meetup record
2. Admin can add tags to a meetup record
3. user can reset a password
4. user can create a meetup record
5. user can create a question record

## Installation

```javascript
§ git clone https://github.com/Livecirhigiri/LastEndPoint2.git
§ npm install
```

##### create port for request and route

```javascript
const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port);
```

# API Reference

## API Endpoints

| Ressourse URL         |  Methods   |            Description |
| --------------------- | :--------: | ---------------------: |
| /meetUp               |  **POST**  |      post a new meetUp |
| /meetUp/<:id>         |  **GET**   |  get ameetUp by his ID |
| /meetUp/upcoming      |  **GET**   | meetUps happening date |
| /meetUp/<:id>         | **PATCH**  |          update meetUp |
| /meetUp               | **DELETE** |   display notification |
| /Question             |  **POST**  |    post a new Question |
| /Questio/<:id>        |  **GET**   |  get question by hisID |
| /Question/upvote      | **PATCH**  |   increment user votes |
| /Question/downvote    | **PATCH**  | decrement user's votes |
| /meetup/<:id>/rsvp    |  **POST**  | opinion attending meet |
| /user                 |  **GET**   |           get all user |
| /user/<:id>           |  **GET**   |            get user ID |
| /meetUp               | **PATCH**  |   display notification |
| /Question             | **DELETE** |            delete user |
| /rsvp/<:id>           |  **GET**   |      get rsvp by hisID |
| /rsvp/                |  **GET**   |           get all rsvp |

## User interface

[userInterface](https://livecirhigiri.github.io/AndelaChallenge1/)

## Credits

Some of ressources I use to build the project

- [ReadMefile](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#headers)
- [pullRequest](https://www.youtube.com/watch?v=OxHkvEWIL7U)
- [restFUllApi](https://www.youtube.com/watch?v=0M2S_7-Tcsc)
- [MochaCompleteTutorial](https://www.youtube.com/watch?v=0M2S_7-Tcsc)
- [APi](https://www.youtube.com/watch?v=pKd0Rpw7O48)

# License

Ir. © Live C.

