const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const readline = require('readline');

const app = express();
const port = 8000;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getDatabaseConfig = async () => {
  const host = '18.207.187.185';

  const questionAsync = (prompt) =>
    new Promise((resolve) => rl.question(prompt, resolve));

  const user = await questionAsync('Enter username: ');
  const password = await questionAsync('Enter password: ');

  rl.close();

  return {
    host: host,
    user: user,
    password: password,
    database: 'inventory',
  };
};

const startServer = async () => {
  const databaseConfig = await getDatabaseConfig();
  const connection = await mysql.createConnection(databaseConfig);

  app.use(cors());

  // app.get('/', (req, res) => {
  //   res.send('Welcome to the Inventory Manager API');
  // });

  app.get('/', async (req, res) => {
    try {
      const [rows] = await connection.execute('SELECT * FROM inventory');
      res.json(rows);
    } catch (error) {
      console.error('Error in /api/inventory route:', error);

      if (error instanceof mysql.Error) {
        res.status(500).send('Internal Server Error (MySQL)');
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
