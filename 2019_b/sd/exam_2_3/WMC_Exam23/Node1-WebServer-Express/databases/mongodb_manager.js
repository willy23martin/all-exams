'use strict'

// References: https://www.npmjs.com/package/mongodb

// Define the environmental variables (see .sample-env file and edit into .env)
var environmentalConfig = require('dotenv');
environmentalConfig.config();

// Database connector configuration:
// References: https://stackoverflow.com/questions/44946270/er-not-supported-auth-mode-mysql-server
const MongoClient = require('mongodb').MongoClient;
const key = process.env.DATABASE_MONGODB_PASSWORD;
const uri = `mongodb+srv://ingmartic:${key}@cluster0-jxar6.mongodb.net/test?retryWrites=true&w=majority`;
const mongoDBConnection = new MongoClient(uri, { useUnifiedTopology: true, useNewUrlParser: true });

module.exports = mongoDBConnection;