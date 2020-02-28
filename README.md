# Node Typescript Slackbot

An example Slack Bot made with Node and Typescript.

The bot in this example pings the whole channel, then sends a GIF.

## Setup

To work, you need a `.env` file containing two keys:

- HOOK - The webhook of the channel ([read more](https://api.slack.com/messaging/webhooks))
- TOKEN - The bot token

## Commands

**Run unit tests**

```sh
$ npm run test
```

**Run unit tests in watch mode**

```sh
$ npm run test:watch
```

**Run application in development mode**

```sh
$ npm run serve
```

**Run application in production mode**

```sh
$ npm start
```
