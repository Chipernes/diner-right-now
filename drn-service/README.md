# Diner Right Now - Service project

## Local development setup
**1.** Install dependencies: `npm install`

## Development Server

**1.** Start the development server: `npm run start:dev`

**2.** Open the application in your browser at: http://localhost:3000/graphql


# Working with graphql playground
In order to work with the graphql playground, you need to set source and authorization headers. For source `okta`: Just use the okta API once, copy the Authentication property and use it to the graphql configuration. Most convenient to use is https://studio.apollographql.com/sandbox/explorer. In the headers tab set

## Mongo DB

If you still don't have mongo db working in local, please follow next steps.

Open `mongod` in your local device

Your MongoDB should be available under following host:

> mongodb://localhost:27017

By default, drn-service is connecting with MongoDB on `localhost:27017` and creating new database called `diner-right-now`.
