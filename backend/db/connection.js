// db/connection.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'mern_test';

const client = new MongoClient(uri, { useUnifiedTopology: true });

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;
